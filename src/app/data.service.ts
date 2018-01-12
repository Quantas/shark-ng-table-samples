import {Injectable} from '@angular/core';

@Injectable()
export class TableDataService {

  private testData = [
    {year: '2017', make: 'Subaru', model: 'WRX'},
    {year: '2017', make: 'Subaru', model: 'Outback'},
    {year: '2017', make: 'Subaru', model: 'Crosstrek'},
    {year: '2017', make: 'Subaru', model: 'Impreza'},
    {year: '2016', make: 'Subaru', model: 'WRX'},
    {year: '2016', make: 'Subaru', model: 'Outback'},
    {year: '2016', make: 'Subaru', model: 'Crosstrek'},
    {year: '2016', make: 'Subaru', model: 'Impreza'},
    {year: '2015', make: 'Subaru', model: 'WRX'},
    {year: '2015', make: 'Subaru', model: 'Outback'},
    {year: '2015', make: 'Subaru', model: 'Crosstrek'},
    {year: '2015', make: 'Subaru', model: 'Impreza'},

    {year: '2017', make: 'Honda', model: 'Accord'},
    {year: '2017', make: 'Honda', model: 'Civic'},
    {year: '2017', make: 'Honda', model: 'Odyssey'},
    {year: '2016', make: 'Honda', model: 'Accord'},
    {year: '2016', make: 'Honda', model: 'Civic'},
    {year: '2016', make: 'Honda', model: 'Odyssey'},
    {year: '2015', make: 'Honda', model: 'Accord'},
    {year: '2015', make: 'Honda', model: 'Civic'},
    {year: '2015', make: 'Honda', model: 'Odyssey'},

    {year: '2017', make: 'Toyota', model: 'Camry'},
    {year: '2017', make: 'Toyota', model: 'Corolla'},
    {year: '2017', make: 'Toyota', model: 'Celica'},
    {year: '2016', make: 'Toyota', model: 'Camry'},
    {year: '2016', make: 'Toyota', model: 'Corolla'},
    {year: '2016', make: 'Toyota', model: 'Celica'},
    {year: '2015', make: 'Toyota', model: 'Camry'},
    {year: '2015', make: 'Toyota', model: 'Corolla'},
    {year: '2015', make: 'Toyota', model: 'Celica'}
  ];

  public getTestData(): any[] {
    return this.testData.slice(0);
  }

}
