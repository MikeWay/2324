import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent {
  private _initialValue = '';
  
  @Output()
  filterEmitter = new EventEmitter<string>();

  @Input()
  label = '';
  
  @Input()
  set initialValue(value: string) {
    if (value) {
      this._initialValue = value;
    }
  }  

  get initialValue(): string {
    return this._initialValue;
  }  

  onFilterEnter( filterValue: string): void {
    this.filterEmitter.emit(filterValue);

  }  
}
