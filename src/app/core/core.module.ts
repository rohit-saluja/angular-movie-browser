import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, MovieCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SideNavComponent, MovieCardComponent],
})
export class CoreModule {}
