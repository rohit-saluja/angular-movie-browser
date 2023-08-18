import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent implements OnInit {
  @Input() movies: Movie[] = [];
  categories: string[] = [];

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.landingService
      .getCategories()
      .subscribe((res: string[]) => (this.categories = res));
  }
  
}
