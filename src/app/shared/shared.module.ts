import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MovieCardPlaceholderComponent } from './placeholders/movie-card-placeholder/movie-card-placeholder.component';
import { BannerPlaceholderComponent } from './placeholders/banner-placeholder/banner-placeholder.component';

@NgModule({
  declarations: [
    BannerComponent,
    MovieCardPlaceholderComponent,
    BannerPlaceholderComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    MovieCardPlaceholderComponent,
    BannerPlaceholderComponent,
  ],
})
export class SharedModule {}
