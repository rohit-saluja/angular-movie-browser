import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from './feature/auth/token.model';
import { AuthService } from './app/feature/auth/auth.service';
import * as moment from 'moment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      const token: Token = JSON.parse(localStorage.getItem('token') || '');
      if (moment(token.access.expires).isSameOrBefore(moment.now())) {
        this.authService.logout().subscribe();
      }
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.access.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
