"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BuyFlightComponent = (function () {
    function BuyFlightComponent(flightsService) {
        this.flightsService = flightsService;
        this.showBuyFlights = true;
    }
    BuyFlightComponent.prototype.onClickBuyFlights = function () {
        this.showBuyFlights = !this.showBuyFlights;
    };
    BuyFlightComponent.prototype.ngOnInit = function () {
        this.flights = this.flightsService.getFlights();
    };
    BuyFlightComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-buy-flight',
            templateUrl: 'buy-flight.component.html',
            styleUrls: ['buy-flight.component.css']
        })
    ], BuyFlightComponent);
    return BuyFlightComponent;
}());
exports.BuyFlightComponent = BuyFlightComponent;
//# sourceMappingURL=buy-flight.component.js.map