import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BasicComponent } from './samples/basic.component';
import { SharkTableModule } from 'shark-ng-table';
import { TableDataService } from './data.service';
import { ColumnFilteringComponent } from './samples/column-filtering.component';
import { FooterFilteringComponent } from './samples/footer-filtering.component';
import { ChildRowsComponent } from './samples/child-rows.component';
import { ChildRowRenderingComponent } from './samples/child-rows-rendering.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColumnFilteringComponent,
    FooterFilteringComponent,
    ChildRowsComponent,
    ChildRowRenderingComponent
  ],
  imports: [
    BrowserModule,
    SharkTableModule,
    AppRoutingModule
  ],
  entryComponents: [ ChildRowRenderingComponent ],
  providers: [ TableDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
