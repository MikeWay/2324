/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import {Component, DebugElement, provide, ComponentResolver, Injector} from '@angular/core';
import {Location, LocationStrategy} from '@angular/common';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import {TestComponentBuilder, ComponentFixture} from "@angular/compiler/testing";
import {WindComponent} from "../wind/wind.component";
import {WeatherService} from "../services/weather.service";
import {
  Router, UrlSerializer, RouterOutletMap, ActivatedRoute, ROUTER_DIRECTIVES, RouterConfig,
  DefaultUrlSerializer
} from "@angular/router";
import { SpyLocation} from "@angular/common/testing";
//import {MockLocationStrategy} from '@angular/common/testing/mock_location_strategy';


//
 describe('Component: CurrentWeather', () => {
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

@Component({
    selector: 'test',
    template: `
    <app-current-weather></app-current-weather>
  `,
    directives: [CurrentWeatherComponent]
})
class CurrentWeatherTestController {
}

@Component({
    template: ''
})
class EmptyComponent {
}

// @Component({template:''})
// class EmptyComponent(){
//
// }

class MockWeatherService {}


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
