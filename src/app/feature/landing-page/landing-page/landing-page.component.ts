import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private landingService: LandingService) {}
  ngOnInit(): void {
    this.landingService.getMovies().subscribe((res) => {
      this.movies = res;
    });
  }
}
