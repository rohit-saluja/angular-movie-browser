import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, MovieCardComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, SideNavComponent, MovieCardComponent],
})
export class CoreModule {}
