import {
  addProviders,
  async, inject
} from '@angular/core/testing';

import {
  provide
} from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams, BaseRequestOptions } from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { ForecastComponent } from './forecast.component';
import {WeatherService, WeatherServiceIF} from "../services/weather.service";
import {Observable} from "rxjs/Rx";
import {Weather} from "../entities/weather";
import {Preferences} from "../entities/preferences";


class MockWeatherService implements WeatherServiceIF {
  getWeather() : Observable<Weather[]>{
    return new Observable<Weather[]>();
  }
  savePreferences(preferences: Preferences ){}
  updatePreferences(preferences: Preferences ){}
  getWindSpeed(){}
  getForecast( location : string ){}
}


describe('Component: Forecast', () => {

  beforeEach(() => addProviders([MockWeatherService]));

  it('should create an instance', inject([MockWeatherService],( weatherService: WeatherServiceIF) => {
    let component = new ForecastComponent(weatherService);
    expect(component).toBeTruthy();
  }));

});

//import {SpyLocation, MockLocationStrategy} from "@angular/common/testing";

// describe('Component: Forecast',  () => {
//   beforeEachProviders(() => {
//     let config: RouterConfig =   [{path: '', component: BlankCmp}];
//     return [WeatherService, RouterOutletMap,
//       {provide: UrlSerializer, useClass: DefaultUrlSerializer},
//       {provide: Location, useClass: SpyLocation},
//       {provide: LocationStrategy, useClass: MockLocationStrategy},
//       {
//         provide: Router,
//         useFactory: (resolver: ComponentResolver, urlSerializer: UrlSerializer,
//                      outletMap: RouterOutletMap, location: Location, injector: Injector) => {
//           return new Router(
//             RootCmp, resolver, urlSerializer, outletMap, location, injector, config);
//         },
//         deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
//       },
//       {provide: ActivatedRoute, useFactory: (r: Router) => r.routerState.root, deps: [Router]},
//     ]});
//
//
//   it('should create an instance', inject([Router, WeatherService, ActivatedRoute], (router : Router, route : ActivatedRoute, service: WeatherService)=> {
//     let component = new ForecastComponent(router, route, service);
//     expect(component).toBeTruthy();
//   }));
// });



// @Component({
//   selector: 'root-cmp',
//   template: `<router-outlet></router-outlet>`,
//   directives: [ROUTER_DIRECTIVES]
// })
// class RootCmp {
// }
//
//
// @Component({selector: 'blank-cmp', template: ``, directives: ROUTER_DIRECTIVES})
// class BlankCmp {
// }


