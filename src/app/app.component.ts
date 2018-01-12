import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <div class="title">
        shark-ng-table Samples
      </div>
      <ul class="links">
        <li routerLinkActive="active"><a [routerLink]="['basic']">Basic</a></li>
        <li routerLinkActive="active"><a [routerLink]="['column-filtering']">Column Filtering</a></li>
        <li routerLinkActive="active"><a [routerLink]="['footer-filtering']">Footer Filtering</a></li>
        <li routerLinkActive="active"><a [routerLink]="['child-rows']">Child Rows</a></li>
      </ul>
    </header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      header {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #4CAF50;
        color: white;
        font-weight: bold;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
      }

      .title {
        padding: 8px 16px;
        font-size: 1.5rem;
      }

      .links {
        margin-left: -3rem;
        margin-top: 3px;
        border-top: 1px solid white;
      }

      .links li {
        float: left;
        list-style: none;
        padding: 8px 16px;
        width: auto;
        display: block;
        border-right: 1px solid white;
      }

      .active {
        background-color: darkseagreen;
      }

      .links li a {
        text-decoration: none;
        color: white;
      }

      .main {
        margin-top: 6.5rem;
      }
    `
  ]
})
export class AppComponent {

}
