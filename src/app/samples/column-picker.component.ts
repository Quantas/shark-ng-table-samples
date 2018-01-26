import {Component, OnInit} from '@angular/core';
import {TableDataService} from '../data.service';
import {SharkColumn} from 'shark-ng-table';

@Component({
  template: `
    <h1>Column Picker</h1>
    <div style="width: 45rem">
      <shark-table
        [data]="testData"
        [columns]="tableColumns"
        [columnPicker]="true"
        [filterable]="false"
        [hideCaption]="true"
      >
      </shark-table>
    </div>

    <h2>HTML</h2>
    <pre>
      &lt;shark-table
        [data]="testData"
        [columns]="tableColumns"
        [columnPicker]="true"
        [filterable]="false"
        [hideCaption]="true"
      &gt;
      &lt;/shark-table&gt;
    </pre>
  `
})
export class ColumnPickerComponent implements OnInit {

  testData = [];

  tableColumns: SharkColumn[] = [
    { header: 'Year', property: 'year' },
    { header: 'Make', property: 'make' },
    { header: 'Model', property: 'model' }
  ];

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.testData = this.tableDataService.getTestData();
  }

}
