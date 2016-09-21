/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BuyFlightComponent } from './buy-flight.component';
import {FlightsService} from "../services/flights.service";

describe('Component: BuyFlight', () => {

  beforeEach(() => addProviders([FlightsService]));

  it('should create an instance', inject( [FlightsService ],(flightsService : FlightsService) =>  {
    let component = new BuyFlightComponent(flightsService);
    expect(component).toBeTruthy();
  }));

  it('should default showBuyFlights to true', inject( [FlightsService ],(flightsService : FlightsService) => {
    let component = new BuyFlightComponent(flightsService);
    expect(component.showBuyFlights).toBeTruthy();
  }));

  it('should set showBuyFlights to false when onClickBuyFlights() is called', inject( [FlightsService ],(flightsService : FlightsService) => {
    let component = new BuyFlightComponent(flightsService);
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeFalsy();
  }));

  it('should set showBuyFlights to true when onClickBuyFlights() is called twice', inject( [FlightsService ],(flightsService : FlightsService) => {
    let component = new BuyFlightComponent(flightsService);
    component.onClickBuyFlights();
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeTruthy();
  }));


});

