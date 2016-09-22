/* tslint:disable:no-unused-variable */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var testing_1 = require('@angular/core/testing');
var current_weather_component_1 = require('./current-weather.component');
var router_1 = require("@angular/router");
//import {MockLocationStrategy} from '@angular/common/testing/mock_location_strategy';
//
testing_1.describe('Component: CurrentWeather', function () {
    //
    //   let builder: TestComponentBuilder;
    //
    //   beforeEachProviders(() => {
    //     let config: RouterConfig =   [{path: '', component: BlankCmp}];
    //     return [CurrentWeatherComponent, MockWeatherService, RouterOutletMap,
    //       {provide: UrlSerializer, useClass: DefaultUrlSerializer},
    //       {provide: Location, useClass: SpyLocation},
    //       {provide: LocationStrategy, useClass: MockLocationStrategy},
    //     {
    //       provide: Router,
    //       useFactory: (resolver: ComponentResolver, urlSerializer: UrlSerializer,
    //                    outletMap: RouterOutletMap, location: Location, injector: Injector) => {
    //         return new Router(
    //           RootCmp, resolver, urlSerializer, outletMap, location, injector, config);
    //       },
    //       deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
    //     },
    //     {provide: ActivatedRoute, useFactory: (r: Router) => r.routerState.root, deps: [Router]},
    //   ]});
    //   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    //       //tcb.overrideDirective(CurrentWeatherComponent, WindComponent, EmptyComponent)
    //     builder = tcb;
    //   }));
    //
    //     it('should inject the component', inject([CurrentWeatherComponent],
    //         (component: CurrentWeatherComponent) => {
    //             expect(component).toBeTruthy();
    //         }));
    //
    //   // it('should create an instance', () => {
    //   //   let component = new CurrentWeatherComponent();
    //   //   expect(component).toBeTruthy();
    //   // });
    //
    //   it('the button should be disabled after onClick()', inject([Router], ( router : Router ) => {
    //     let component = new CurrentWeatherComponent(router);
    //     expect(component.buttonDisabled).toBeFalsy();
    //     component.onClick();
    //     expect(component.buttonDisabled).toBeTruthy();
    //
    //   }));
    // it('the button should be enabled after onClickOther()', () => {
    //   let component = new CurrentWeatherComponent();
    //   component.buttonDisabled = true;
    //   component.onClickOther();
    //   expect(component.buttonDisabled).toBeFalsy();
    // });
    // it('should create the component', injectAsync([TestComponentBuilder], () => {
    //   return builder
    //       .overrideProviders(CurrentWeatherComponent, WeatherService, [MockWeatherService])
    //       .overrideDirective(CurrentWeatherComponent, WindComponent, EmptyComponent)
    //       .createAsync(CurrentWeatherComponent)
    //       .then((fixture: ComponentFixture<any>) => {
    //         let query = fixture.debugElement.query(By.directive(CurrentWeatherComponent));
    //         expect(query).toBeTruthy();
    //         expect(query.componentInstance).toBeTruthy();
    //       });
    // }));
    // it('should disable the button when buttonDisabled is true', inject([], () => {
    //   return builder.createAsync(CurrentWeatherComponent)
    //       .then((fixture: ComponentFixture<any>) => {
    //         let element =  fixture.nativeElement;
    //         let query = fixture.debugElement.query(By.directive(CurrentWeatherComponent));
    //         expect(query).toBeTruthy();
    //         query.componentInstance.buttonDisabled = true;
    //         fixture.detectChanges();
    //         expect(element.querySelector('#updateButton').disabled).toBe(true);
    //       });
    // }));
});
/*
 fixture.nativeElement.querySelector("#special-offers-button").click();
 fixture.detectChanges();
 expect(element.querySelector('special-offers') === null).toBe(false);
 */
var CurrentWeatherTestController = (function () {
    function CurrentWeatherTestController() {
    }
    CurrentWeatherTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <app-current-weather></app-current-weather>\n  ",
            directives: [current_weather_component_1.CurrentWeatherComponent]
        })
    ], CurrentWeatherTestController);
    return CurrentWeatherTestController;
}());
var EmptyComponent = (function () {
    function EmptyComponent() {
    }
    EmptyComponent = __decorate([
        core_1.Component({
            template: ''
        })
    ], EmptyComponent);
    return EmptyComponent;
}());
// @Component({template:''})
// class EmptyComponent(){
//
// }
var MockWeatherService = (function () {
    function MockWeatherService() {
    }
    return MockWeatherService;
}());
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
//# sourceMappingURL=current-weather.component.spec.js.map