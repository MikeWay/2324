import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {

  @Output()
  filterEmitter = new EventEmitter<string>();

  @Input()
  label = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFilterEnter( filterValue: string): void {
    this.filterEmitter.emit(filterValue);
  }

}
