"use strict";
var app_component_1 = require('./app.component');
var upgrade_adapter_1 = require('./upgrade_adapter');
//bootstrap(AppComponent);
//let upgradeAdapter = new UpgradeAdapter();
// Downgrade AppComponent to work as an A1 component
angular.module('container').directive('appComponent', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
upgrade_adapter_1.upgradeAdapter.bootstrap(document.documentElement, ['container']);
//# sourceMappingURL=main.js.map