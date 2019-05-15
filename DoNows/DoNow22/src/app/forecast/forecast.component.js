"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ForecastComponent = (function () {
    function ForecastComponent(router, route, weatherService) {
        this.router = router;
        this.route = route;
        this.weatherService = weatherService;
        this.mylocation = "Netherland";
    }
    ForecastComponent.prototype.ngOnInit = function () {
        // this.sub = this.route.params.subscribe(params => {
        //   this.mylocation = params['location'];
        //   this.unit = params['units'];
        //   console.log("Location is now: " + this.mylocation)
        //   this.forecast = this.weatherService.getForecast(this.mylocation);
        // });
        var _this = this;
        this.sub2 = this.router.routerState.queryParams.subscribe(function (params) {
            _this.mylocation = params['location'];
            _this.unit = params['units'];
            console.log("Location is now (set by query parameters) : " + _this.mylocation + " Units " + _this.unit);
            _this.forecast = _this.weatherService.getForecast(_this.mylocation);
        });
    };
    ForecastComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    ForecastComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-forecast',
            templateUrl: './forecast.component.html',
            styles: ['p {color:blue;}']
        })
    ], ForecastComponent);
    return ForecastComponent;
}());
exports.ForecastComponent = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map