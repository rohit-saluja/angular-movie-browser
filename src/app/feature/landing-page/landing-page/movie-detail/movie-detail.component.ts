import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
import { Movie } from '../../movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie = {};
  public relatedMovies: Movie[] = [];

  constructor(
    private landingService: LandingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.landingService
      .getMovieDetail(this.route.snapshot.params['movieId'])
      .subscribe((res: { movie: Movie; relatedMovies: Movie[] }) => {
        this.movie = res.movie;
        this.relatedMovies = res.relatedMovies;
      });
  }
}
