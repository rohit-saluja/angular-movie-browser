import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Token } from 'src/app/feature/auth/token.model';
import { User } from 'src/app/feature/auth/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private user: BehaviorSubject<User> = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem('user') || '')
  );

  public user$ = this.user.asObservable();

  public signup(data: User): Observable<{ userDoc: User; tokens: Token }> {
    return this.httpClient
      .post<{ userDoc: User; tokens: Token }>(
        `${environment.baseUrl}/auth/register`,
        data
      )
      .pipe(
        map((res: { userDoc: User; tokens: Token }) => {
          localStorage.setItem('user', JSON.stringify(res.userDoc));
          localStorage.setItem('token', JSON.stringify(res.tokens));
          this.user.next(res.userDoc);
          return res;
        })
      );
  }

  public login(data: {
    email: string;
    password: string;
  }): Observable<{ user: User; tokens: Token }> {
    return this.httpClient
      .post<{ user: User; tokens: Token }>(
        `${environment.baseUrl}/auth/login`,
        data
      )
      .pipe(
        map((res: { user: User; tokens: Token }) => {
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('token', JSON.stringify(res.tokens));
          this.user.next(res.user);
          return res;
        })
      );
  }

  public logout(): Observable<null> {
    const token: Token = JSON.parse(localStorage.getItem('token') || '');
    return this.httpClient.post<null>(
      `${environment.baseUrl}/auth/logout`,
      token.refresh.token
    );
  }

  public forgotPassword(data: { email: string }): Observable<null> {
    return this.httpClient.post<null>(
      `${environment}/auth/forgot-password`,
      data
    );
  }

  public resetPassword(data: {
    password: string;
    token: string;
  }): Observable<null> {
    return this.httpClient.post<null>(
      `${environment.baseUrl}/auth/reset-password`,
      data
    );
  }

  public sendVerificationEmail(): Observable<null> {
    return this.httpClient.post<null>(
      `${environment}/auth/send-verification-email`,
      {}
    );
  }

  get userObject(): User {
    return this.user.value;
  }
}
