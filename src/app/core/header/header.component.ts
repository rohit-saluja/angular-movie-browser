import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  EMPTY,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
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
  currentIndex = -1;

  constructor(
    private authService: AuthService,
    private landingService: LandingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userObject;
    this.movieInput.valueChanges
      .pipe(
        map((value) => {
          if (!value) {
            this.movies = [];
            this.currentIndex = -1;
          }
          return value;
        }),
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => !!value),
        switchMap((value) =>
          this.landingService.searchMoviesFromInputText(value as string)
        )
      )
      .subscribe((res: Movie[]) => {
        this.movies = res;
      });
  }

  enter(): void {
    this.movieInput.setValue(this.movies[this.currentIndex].name as string, {
      emitEvent: false,
    });
    this.router.navigate(['/movie-detail', this.movies[this.currentIndex]._id]);
    this.currentIndex = -1;
    this.movies = [];
  }

  autoSuggestionClicked(index: number): void {
    this.movieInput.setValue(this.movies[index].name as string, {
      emitEvent: false,
    });
    this.router.navigate(['/movie-detail', this.movies[index]._id]);
    this.currentIndex = -1;
    this.movies = [];
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
