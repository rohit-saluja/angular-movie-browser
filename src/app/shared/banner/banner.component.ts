import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  moment = moment;
}
