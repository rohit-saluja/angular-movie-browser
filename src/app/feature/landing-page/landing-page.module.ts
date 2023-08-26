import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BollywoodClassicsComponent } from './landing-page/home-page/bollywood-classics/bollywood-classics.component';
import { HomePageComponent } from './landing-page/home-page/home-page.component';
import { MustWatchComponent } from './landing-page/home-page/must-watch/must-watch.component';
import { RecommendedForYouComponent } from './landing-page/home-page/recommended-for-you/recommended-for-you.component';
import { MovieDetailComponent } from './landing-page/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    MustWatchComponent,
    RecommendedForYouComponent,
    BollywoodClassicsComponent,
    MovieDetailComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule, CoreModule, SharedModule],
})
export class LandingPageModule {}
