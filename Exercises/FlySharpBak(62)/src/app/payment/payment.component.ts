import { Component, OnInit } from '@angular/core';
import {Flight} from "../model/flight";
import {Input} from "@angular/core";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;

  constructor() { }

  ngOnInit() {
  }

}
