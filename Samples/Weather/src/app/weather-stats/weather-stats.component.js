"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WeatherStatsComponent = (function () {
    function WeatherStatsComponent() {
        this.stats = [{
                'date': "July 14",
                'temperature': 23,
                'tempUnits': 'C'
            },
            {
                'date': "July 15",
                'temperature': 25,
                'tempUnits': 'C'
            },
            {
                'date': "July 16",
                'temperature': 21,
                'tempUnits': 'C'
            }];
    }
    WeatherStatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-weather-stats',
            templateUrl: 'weather-stats.component.html',
            styleUrls: ['weather-stats.component.css']
        })
    ], WeatherStatsComponent);
    return WeatherStatsComponent;
}());
exports.WeatherStatsComponent = WeatherStatsComponent;
//# sourceMappingURL=weather-stats.component.js.map