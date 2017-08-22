angular.module('DeliveryApp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.when('', '/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/landingPage/landingPage.html',
      controller: 'LandingPageCtrl',
      controllerAs: 'ctrl'
    })
    .state('create.delivery', {
      url: '/create/delivery',
      templateUrl: 'components/forms/delivery/deliveryForm.html',
      controller: 'DeliveryFormCtrl',
      controllerAs: 'ctrl'
    });
    
  $urlRouterProvider.otherwise('/');
}])
