import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from 'src/app/feature/auth/token.model';
import { User } from 'src/app/feature/auth/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private user: BehaviorSubject<User> = new BehaviorSubject<User>({});

  signup(data: User): Observable<{ userDoc: User; tokens: Token }> {
    return this.httpClient.post<{ userDoc: User; tokens: Token }>(
      `${environment.baseUrl}/auth/register`,
      data
    );
  }
}
