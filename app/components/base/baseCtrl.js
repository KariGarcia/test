angular.module('DeliveryApp')

.controller('BaseCtrl', function($scope, $state) {
  $scope.goToState = function(state, params){
    console.info("hokaslfdns")
    var params = params || {};
    $state.go(state, params)
  }
});