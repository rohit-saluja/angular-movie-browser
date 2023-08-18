import { Component, Input } from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss'],
})
export class RecommendedForYouComponent {
  @Input() movies: Movie[] = [];
  
}
