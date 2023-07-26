import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/feature/auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private user: BehaviorSubject<User> = new BehaviorSubject<User>({});

  signup(): any {
    // return this.httpClient.post(`/`)
  }
}
