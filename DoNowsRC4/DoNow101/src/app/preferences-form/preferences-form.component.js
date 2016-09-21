"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var preferences_1 = require('../entities/preferences');
var PreferencesFormComponent = (function () {
    function PreferencesFormComponent() {
        this.tmpUnits = ['F', 'C', 'K'];
        this.speedUnits = ['Knots', 'MPH', 'KPH', 'M/S'];
        this.model = new preferences_1.Preferences("Long John Silver", "Treasure Island", "F", "Knots", 10);
    }
    PreferencesFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PreferencesFormComponent.prototype, "jsonData", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    PreferencesFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-preferences-form',
            templateUrl: 'preferences-form.component.html',
            styleUrls: ['preferences-form.component.css']
        })
    ], PreferencesFormComponent);
    return PreferencesFormComponent;
}());
exports.PreferencesFormComponent = PreferencesFormComponent;
//# sourceMappingURL=preferences-form.component.js.map