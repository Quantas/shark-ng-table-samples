import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BasicComponent } from './samples/basic.component';
import { FilterableComponent } from './samples/filterable.component';
import { PageableComponent } from './samples/pageable.component';
import { SharkTableModule } from 'shark-ng-table';
import { TableDataService } from './data.service';
import { ColumnFilteringComponent } from './samples/column-filtering.component';
import { FooterFilteringComponent } from './samples/footer-filtering.component';
import { ChildRowsComponent } from './samples/child-rows.component';
import { ChildRowRenderingComponent } from './samples/child-rows-rendering.component';
import { CustomCellsComponent, MakeComponent } from './samples/custom-cell.component';
import { PagingAndFilteringComponent } from './samples/paging-filtering.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FilterableComponent,
    PageableComponent,
    PagingAndFilteringComponent,
    ColumnFilteringComponent,
    FooterFilteringComponent,
    ChildRowsComponent,
    ChildRowRenderingComponent,
    CustomCellsComponent,
    MakeComponent
  ],
  imports: [
    BrowserModule,
    SharkTableModule,
    AppRoutingModule
  ],
  entryComponents: [ ChildRowRenderingComponent, MakeComponent ],
  providers: [ TableDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
