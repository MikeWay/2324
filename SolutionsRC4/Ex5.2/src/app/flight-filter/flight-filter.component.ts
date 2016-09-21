import {Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-flight-filter',
  templateUrl: 'flight-filter.component.html',
  styleUrls: ['flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {
  @Output()
  private onFilter = new EventEmitter<string>();

  constructor() { }

  private onFilterEnter( filterValue : string){
    this.onFilter.emit(filterValue);
  }

  ngOnInit() {
  }

}
