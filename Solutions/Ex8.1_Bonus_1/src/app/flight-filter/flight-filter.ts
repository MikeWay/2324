import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  imports: [],
  templateUrl: './flight-filter.html',
  styleUrl: './flight-filter.scss',
})
export class FlightFilter {
  @Input() label = '';
  @Input() initialValue = '';
  @Output() filterEmitter = new EventEmitter<string>();

  onFilterEnter(filterValue: string): void {
    this.filterEmitter.emit(filterValue.toLocaleUpperCase());
  }
}
