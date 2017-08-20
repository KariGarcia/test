'use strict';

angular.module('DeliveryApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/landingPage/landingPage.html',
    controller: 'LandingPageCtrl'
  });
}])

.controller('LandingPageCtrl', [function() {

}]);