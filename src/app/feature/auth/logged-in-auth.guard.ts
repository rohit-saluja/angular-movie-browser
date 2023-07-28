import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/app/feature/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInAuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    return !this.authService.isLoggedIn();
  }
}
