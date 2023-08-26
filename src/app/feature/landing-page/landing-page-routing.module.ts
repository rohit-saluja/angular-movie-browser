import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomePageComponent } from './landing-page/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [{ path: '', component: HomePageComponent }],
  },
  { path: 'movie-detail/:movieId', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
