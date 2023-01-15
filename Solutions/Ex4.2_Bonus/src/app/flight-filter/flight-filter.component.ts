import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent {

  @Output()
  filterEmitter = new EventEmitter<string>();


  onFilterEnter(filterValue: string): void {
    this.filterEmitter.emit(filterValue);

  }
}
