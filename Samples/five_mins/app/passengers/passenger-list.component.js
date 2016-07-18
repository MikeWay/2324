'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
    module('passengerList').
    component('passengerList', {
    templateUrl: 'app/passengers/passenger-list.template.html',
    controller: function PassengerListController() {
        this.passengers = [
            {
                firstName: 'Ernest',
                familyName: 'Hemingway',
                seat: '4c'
            }, {
                firstName: 'Stephen',
                familyName: 'King',
                seat: '12F'
            }, {
                firstName: 'Agatha',
                familyName: 'Christie',
                seat: '12F'
            }
        ];
    }
});
//# sourceMappingURL=passenger-list.component.js.map