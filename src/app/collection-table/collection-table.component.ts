import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss']
})
export class CollectionTableComponent {

  @Input() mockTableData: any[];

}
