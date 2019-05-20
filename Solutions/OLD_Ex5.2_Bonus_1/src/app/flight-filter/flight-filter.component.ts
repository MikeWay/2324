import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from "@angular/core";

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {
  @Output()
  onFilter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onFilterEnter( filterValue : string){
    this.onFilter.emit(filterValue);
  }
}
