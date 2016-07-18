import {DebugElement, ComponentResolver, Injector, Component} from '@angular/core';
import {Location, LocationStrategy} from '@angular/common';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { WeatherService } from '../services/weather.service';
import {
  ActivatedRoute, RouterConfig, RouterOutletMap, UrlSerializer, DefaultUrlSerializer,
  Router, ROUTER_DIRECTIVES
} from "@angular/router";
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



@Component({
  selector: 'root-cmp',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
class RootCmp {
}


@Component({selector: 'blank-cmp', template: ``, directives: ROUTER_DIRECTIVES})
class BlankCmp {
}
