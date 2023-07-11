import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class CoreModule {}
