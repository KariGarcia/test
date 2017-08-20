'use strict';

// Declare app level module which depends on views, and components
angular.module('DeliveryApp', [
  'ngRoute',
  'DeliveryApp.landingPage'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
