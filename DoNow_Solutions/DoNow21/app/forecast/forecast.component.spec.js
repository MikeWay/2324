"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
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
var RootCmp = (function () {
    function RootCmp() {
    }
    RootCmp = __decorate([
        core_1.Component({
            selector: 'root-cmp',
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], RootCmp);
    return RootCmp;
}());
var BlankCmp = (function () {
    function BlankCmp() {
    }
    BlankCmp = __decorate([
        core_1.Component({ selector: 'blank-cmp', template: "", directives: router_1.ROUTER_DIRECTIVES })
    ], BlankCmp);
    return BlankCmp;
}());
//# sourceMappingURL=forecast.component.spec.js.map