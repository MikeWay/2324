"use strict";
var Preferences = (function () {
    function Preferences(name, location, tempUnits, speedUnits, forecastLength) {
        this.name = name;
        this.location = location;
        this.tempUnits = tempUnits;
        this.speedUnits = speedUnits;
        this.forecastLength = forecastLength;
    }
    return Preferences;
}());
exports.Preferences = Preferences;
//# sourceMappingURL=preferences.js.map