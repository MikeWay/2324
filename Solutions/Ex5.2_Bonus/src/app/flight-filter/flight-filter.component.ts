import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-flight-filter',
  templateUrl: 'flight-filter.component.html',
  styleUrls: ['flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {

  @Input()
  label : string = "Filter flights by origin:";

  @Output()
  private onFilter = new EventEmitter<string>();

  constructor() {}


  private onFilterEnter( filterValue : string){
    this.onFilter.emit(filterValue);

  }


  ngOnInit() {
  }

}
