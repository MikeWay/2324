"use strict";
// Register `phoneList` component, along with its associated controller and template
angular.
    module('container').
    component('container', {
    template: 
    // // '<ul>' +
    //   '<li ng-repeat="phone in $ctrl.phones">' +
    //     '<span>{{phone.name}}</span>' +
    //     '<p>{{phone.snippet}}</p>' +
    //   '</li>' +
    // '</ul>' +
    '<passenger-list></passenger-list><app-component></app-component>'
});
//angular.module('phonecatApp').directive('appComponent', upgradeAdapter.downgradeNg2Component(AppComponent)); 
//# sourceMappingURL=container.component.js.map