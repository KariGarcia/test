'use strict';

angular.module('DeliveryApp', [
  'ngRoute',
  'DeliveryApp.landingPage'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({enabled:true})
  $routeProvider.otherwise({redirectTo: '/'});
}]);
