import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent {
  @Input()
  label = '';
  @Input()
  initialValue='';
  
  @Output()
  filterEmitter = new EventEmitter<string>();
	
  onFilterEnter( filterValue : string): void {
    this.filterEmitter.emit(filterValue);

  }
}
