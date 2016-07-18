import { upgradeAdapter } from './upgrade_adapter';
import { AppComponent } from './app.component';

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
    // controller: function PhoneListController() {
    //   this.phones = [
    //     {
    //       name: 'Nexus S',
    //       snippet: 'Fast just got faster with Nexus S.'
    //     }, {
    //       name: 'Motorola XOOM™ with Wi-Fi',
    //       snippet: 'The Next, Next Generation tablet.'
    //     }, {
    //       name: 'MOTOROLA XOOM™',
    //       snippet: 'The Next, Next Generation tablet.'
    //     }
    //   ];
    // }
  });


//angular.module('phonecatApp').directive('appComponent', upgradeAdapter.downgradeNg2Component(AppComponent));