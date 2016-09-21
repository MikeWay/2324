"use strict";
var router_1 = require('@angular/router');
var forecast_component_1 = require("./forecast/forecast.component");
var home_component_1 = require("./home/home.component");
var warnings_component_1 = require("./warnings/warnings.component");
var current_weather_component_1 = require("./current-weather/current-weather.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'forecast/:location/:units', component: forecast_component_1.ForecastComponent },
    { path: 'forecastq', component: forecast_component_1.ForecastComponent },
    { path: 'warnings', component: warnings_component_1.WarningsComponent },
    { path: 'current', component: current_weather_component_1.CurrentWeatherComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map