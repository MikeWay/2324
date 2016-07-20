"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wind_speed_pipe_1 = require('../pipe/wind-speed.pipe');
var WindComponent = (function () {
    function WindComponent(weatherService) {
        this.weatherService = weatherService;
        this.windSpeedKnots = 20;
        this.instabilityIndex = 1.8;
        this.highlightSpeed = false;
    }
    WindComponent.prototype.ngOnInit = function () {
        this.weatherService.getWindSpeed();
    };
    WindComponent.prototype.getStyles = function () {
        return {
            'font-family': 'Arial, Helvetica, sans-serif',
            'color': 'cyan',
            'font-style': 'italic'
        };
    };
    WindComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-wind',
            templateUrl: 'wind.component.html',
            styleUrls: ['wind.component.css'],
            pipes: [wind_speed_pipe_1.WindSpeedPipe]
        })
    ], WindComponent);
    return WindComponent;
}());
exports.WindComponent = WindComponent;
//# sourceMappingURL=wind.component.js.map