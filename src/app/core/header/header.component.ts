import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/app/feature/auth/auth.service';
import { User } from 'src/app/feature/auth/user.model';
import { LandingService } from 'src/app/feature/landing-page/landing.service';
import { Movie } from 'src/app/feature/landing-page/movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {};
  showUserProfilePopup: boolean = false;
  movies: Movie[] = [];
  movieInput = new FormControl('');

  constructor(
    private authService: AuthService,
    private landingService: LandingService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userObject;
    this.movieInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) =>
          this.landingService.searchMoviesFromInputText(value as string)
        )
      )
      .subscribe((res: Movie[]) => {
        this.movies = res;
      });
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
