"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forecast_component_1 = require('./forecast/forecast.component');
var current_weather_component_1 = require('./current-weather/current-weather.component');
var weather_stats_component_1 = require('./weather-stats/weather-stats.component');
var weather_service_1 = require('./weather.service');
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app works!';
    }
    // @ViewChild(CurrentWeatherComponent)
    // currentWeatherComponent : CurrentWeatherComponent;
    //
    //
    // private onClick(){
    //   this.title='new title';
    //   this.currentWeatherComponent.currentCity = "Tokyo";
    // }
    AppComponent.prototype.onWeatherUpdated = function (city) {
        console.log("City is : " + city);
    };
    AppComponent.prototype.onClickWarnings = function () {
        console.log("Weather warnings clicked");
        this.router.navigate(['/warnings']);
    };
    AppComponent.prototype.onClickForecast = function () {
        var location = "Paris";
        var units = "Celsius";
        this.router.navigate(['/forecast', location, units]);
    };
    AppComponent.prototype.onClickForecastByQuery = function () {
        var location = "Paris";
        var units = "Celsius";
        this.router.navigate(['/forecastq'], { queryParams: { 'location': location, 'units': units } });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [forecast_component_1.ForecastComponent, current_weather_component_1.CurrentWeatherComponent, weather_stats_component_1.WeatherStatsComponent, router_1.ROUTER_DIRECTIVES],
            providers: [weather_service_1.WeatherService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map