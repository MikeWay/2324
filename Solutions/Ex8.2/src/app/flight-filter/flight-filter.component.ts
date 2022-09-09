import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent {

  @Output()
  filterEmitter = new EventEmitter<string>();

  @Input()
  label = '';

  // Next line stops tslint complaining about the _ at the start of the variable name
  // tslint:disable-next-line
  private _initialValue = '';

  constructor() { }

  get initialValue(): string {
    return this._initialValue;
  }
  @Input()
  set initialValue(value: string) {
    if (value != null) {
      this._initialValue = value;
    }
  }

  onFilterEnter(filterValue: string): void {
    this.filterEmitter.emit(filterValue);
  }

}
