import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './samples/basic.component';
import { ColumnFilteringComponent } from './samples/column-filtering.component';
import { FooterFilteringComponent } from './samples/footer-filtering.component';
import { ChildRowsComponent } from './samples/child-rows.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },

  { path: 'basic', component: BasicComponent },
  { path: 'column-filtering', component: ColumnFilteringComponent },
  { path: 'footer-filtering', component: FooterFilteringComponent },
  { path: 'child-rows', component: ChildRowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
