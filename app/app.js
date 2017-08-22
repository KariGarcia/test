'use strict';

angular.module('DeliveryApp', [
  'ui.router',
  'DeliveryApp.landingPage'
])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode({enabled:true})
  
}]);
