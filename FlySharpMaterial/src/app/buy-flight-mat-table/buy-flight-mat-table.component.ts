import { FlightsService } from './../flights/flights.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { BuyFlightMatTableDataSource } from './buy-flight-mat-table-datasource';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight-mat-table',
  templateUrl: './buy-flight-mat-table.component.html',
  styleUrls: ['./buy-flight-mat-table.component.css']
})
export class BuyFlightMatTableComponent implements AfterViewInit, OnInit {

  constructor( private flightsService : FlightsService){};
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Flight>;
  dataSource: BuyFlightMatTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'origin', 'destination', 'departDay', 'departTime', 'arriveDay', 'arriveTime' ];

  ngOnInit() {
    this.dataSource = new BuyFlightMatTableDataSource( this.flightsService );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
