import { Component, Input } from '@angular/core';
import { Movie } from '../../../movie.model';

@Component({
  selector: 'app-must-watch',
  templateUrl: './must-watch.component.html',
  styleUrls: ['./must-watch.component.scss'],
})
export class MustWatchComponent {
  @Input() movies: Movie[] = [];
}
