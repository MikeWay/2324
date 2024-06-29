import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [],
  templateUrl: './flight-filter.component.html',
  styleUrl: './flight-filter.component.scss'
})
export class FlightFilterComponent {
  @Output()
  filterEmitter = new EventEmitter<string>();

	
  onFilterEnter( filterValue : string): void {
    this.filterEmitter.emit(filterValue);

  }  
}
