import {Component, OnInit} from '@angular/core';
import {TableDataService} from '../data.service';
import {SharkColumn} from 'shark-ng-table';

@Component({
  template: `
    <h1>Basic Table</h1>
    <div style="width: 37rem">
      <shark-table
        [data]="testData"
        [columns]="tableColumns"
        [filterable]="false"
        [localPaging]="false"
      >
      </shark-table>
    </div>

    <h2>HTML</h2>
    <pre>
      &lt;shark-table
        [data]="testData"
        [columns]="tableColumns"
        [filterable]="false"
        [localPaging]="false"&gt;
      &lt;/shark-table&gt;
    </pre>
  `
})
export class BasicComponent implements OnInit {

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
