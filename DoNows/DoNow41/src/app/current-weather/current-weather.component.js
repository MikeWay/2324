"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wind_component_1 = require('../wind/wind.component');
var CurrentWeatherComponent = (function () {
    function CurrentWeatherComponent(router) {
        this.router = router;
        this.buttonDisabled = false;
        this.raining = true;
        this.sunny = false;
        this.conditions = "sunny";
        this.currentCity = "Berlin";
        this.weatherUpdated = new core_1.EventEmitter();
    }
    Object.defineProperty(CurrentWeatherComponent.prototype, "preferedUnits", {
        get: function () {
            return this._preferedUnits;
        },
        set: function (preferedUnits) {
            this._preferedUnits = preferedUnits;
            console.log("New value of preferred units is: " + preferedUnits);
        },
        enumerable: true,
        configurable: true
    });
    CurrentWeatherComponent.prototype.onClick = function () {
        this.buttonDisabled = true;
        this.weatherUpdated.emit(this.currentCity);
        // this.debug=JSON.stringify(this);
        // console.log(this.preferedUnits);
    };
    CurrentWeatherComponent.prototype.onClickOther = function () {
        this.buttonDisabled = false;
        // this.debug=JSON.stringify(this);
    };
    CurrentWeatherComponent.prototype.onClickWarnings = function () {
        this.router.navigate(['/warnings']);
    };
    CurrentWeatherComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], CurrentWeatherComponent.prototype, "_preferedUnits");
    __decorate([
        core_1.Output()
    ], CurrentWeatherComponent.prototype, "weatherUpdated");
    CurrentWeatherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-current-weather',
            templateUrl: 'current-weather.component.html',
            styleUrls: ['current-weather.component.css'],
            directives: [wind_component_1.WindComponent]
        })
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}());
exports.CurrentWeatherComponent = CurrentWeatherComponent;
//# sourceMappingURL=current-weather.component.js.map