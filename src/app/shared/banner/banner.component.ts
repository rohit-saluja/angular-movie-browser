import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Movie } from 'src/app/feature/landing-page/movie.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() movie: Movie = {};
  moment = moment;

  ngOnInit(): void {}
}
