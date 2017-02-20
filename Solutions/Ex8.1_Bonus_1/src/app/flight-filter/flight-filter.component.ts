import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output, Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {
  @Input()
  label : string;

  @Input()
  initialValue : string = "";
  
  @Output()
  onFilter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  private onFilterEnter( filterValue : string){
    this.onFilter.emit(filterValue);
  }
}
