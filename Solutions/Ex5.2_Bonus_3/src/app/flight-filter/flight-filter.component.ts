import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent  {

  @Output()
  filterEmitter = new EventEmitter<string>();

  @Input()
  label = '';

  constructor() { }


  onFilterEnter( filterValue: string): void {
    this.filterEmitter.emit(filterValue);
  }

}
