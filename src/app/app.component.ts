import { Component } from '@angular/core';

import { data } from './mockaroo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collection-to-table';
  mockData = data;

}
