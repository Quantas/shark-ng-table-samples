import {Component, OnInit} from '@angular/core';
import {TableDataService} from '../data.service';
import {SharkColumn} from 'shark-ng-table';
import {ChildRowRenderingComponent} from './child-rows-rendering.component';

@Component({
  template: `
    <h1>Child Rows</h1>
    <div style="width: 40rem">
      <shark-table
        [data]="testData"
        [columns]="tableColumns"
        [columnFiltering]="true"
        [headersInFooter]="true"
        [footerColumnFiltering]="true"
        [childRows]="true"
        [childComponent]="childComponent"
      >
      </shark-table>
    </div>

    <h2>HTML</h2>
    <pre>
      &lt;shark-table
        [data]="testData"
        [columns]="tableColumns"
        [columnFiltering]="true"
        [headersInFooter]="true"
        [footerColumnFiltering]="true"
        [childRows]="true"
        [childComponent]="childComponent"
      &gt;&lt;/shark-table&gt;
    </pre>
  `
})
export class ChildRowsComponent implements OnInit {

  childComponent = ChildRowRenderingComponent;

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
