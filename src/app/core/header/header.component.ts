import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/app/feature/auth/auth.service';
import { User } from 'src/app/feature/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {};
  showUserProfilePopup: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.userObject;
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
