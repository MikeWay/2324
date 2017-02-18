"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WindSpeedPipe = (function () {
    function WindSpeedPipe() {
    }
    WindSpeedPipe.prototype.transform = function (value, units, conversion) {
        if (units === void 0) { units = "knots"; }
        if (conversion === void 0) { conversion = 1.0; }
        return value * conversion + " " + units;
    };
    WindSpeedPipe = __decorate([
        core_1.Pipe({
            name: 'windSpeed'
        })
    ], WindSpeedPipe);
    return WindSpeedPipe;
}());
exports.WindSpeedPipe = WindSpeedPipe;
//# sourceMappingURL=wind-speed.pipe.js.map