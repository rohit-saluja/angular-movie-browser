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

  signup(data: User): Observable<{ userDoc: User; tokens: Token }> {
    return this.httpClient
      .post<{ userDoc: User; tokens: Token }>(
        `${environment.baseUrl}/auth/register`,
        data
      )
      .pipe(
        map((res: { userDoc: User; tokens: Token }) => {
          localStorage.setItem('user', JSON.stringify(res.userDoc));
          this.user.next(res.userDoc);
          return res;
        })
      );
  }

  get userObject(): User {
    return this.user.value;
  }
}
