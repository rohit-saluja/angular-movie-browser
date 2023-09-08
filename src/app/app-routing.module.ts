import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/auth.guard';
import { LoggedInAuthGuard } from './feature/auth/logged-in-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canLoad: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./feature/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./feature/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
