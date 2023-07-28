import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/app/feature/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    return this.authService.isLoggedIn();
  }
}
