import { Component } from '@angular/core';
import { Movie } from '../../movie.model';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  movies: Movie[] = [];
  bannerMovie: Movie = {};

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.landingService.getMovies().subscribe((res) => {
      this.movies = res;
    });
    this.landingService
      .getBannerImage()
      .subscribe((res) => (this.bannerMovie = res));
  }
}
