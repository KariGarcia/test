'use strict';

angular.module('DeliveryApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/landingPage/landingPage.html',
    controller: 'LandingPageCtrl',
    controllerAs: 'ctrl'
  });
}])

// .filter('startFrom', function() {
//     return function(input, start) {
//         start = +start;
//         return input.slice(start);
//     }
// })
.controller('LandingPageCtrl', function($scope, $filter) {

  $scope.q={};
  // $scope.pageSize = 5
  // $scope.currentPage = 0;
  // $scope.totalPages = 0;
  // $scope.actionButtons = [
  //   {buttonText:"Borrar", buttonAction:false}
  // ];
$scope.data={}
  $scope.data.columnsTitles  = ["Nombre", "Dirección", "Teléfono", ""]
  $scope.data.columnsConfig  = [
    {columnTitle:"Nombre", propertyName:"name", isSortable: true, sortFunction:false}
    , {columnTitle:"Dirección", propertyName:"adress", isSortable: false, sortFunction:false}
    , {columnTitle:"Teléfono", propertyName:"phone", isSortable: false, sortFunction:false}
  ]
  $scope.data.columnsContent = []

  for (var i = 0; i < 20; i++) {
    $scope.data.columnsContent.push({
      id: i
      , name: "restaurante"+i
      , adress: "direccion"+i
      , phone: "phone"+i
    })
  }

  // $scope.propertyName = $scope.columnsConfig.some(function(item, index){
  //   return item.isSortable;
  // });
  // $scope.reverse = true;
  // $scope.filteredData = $filter('orderBy')($scope.columnsContent, $scope.propertyName, $scope.reverse);
  // $scope.sortBy = function(propertyName) {
  //   $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
  //   $scope.propertyName = propertyName;
  //   if($scope.columnsContent[propertyName].sortFunction){
  //     $scope.columnsContent[propertyName].sortFunction();
  //   } else{
  //     $scope.filteredData = $filter('orderBy')($scope.filteredData, $scope.propertyName, $scope.reverse);
  //   }
  // };

  // $scope.createSimpleArray = function(length){
  //   return new Array(+length);
  // }

  // $scope.updateTotalPages = function(){
  //   $scope.totalPages = Math.ceil($scope.filteredData.length / $scope.pageSize);
  // }
  // $scope.updateTotalPages();

  // $scope.changePage = function(page){
  //   $scope.currentPage = page;
  // }

  // $scope.hidePaginatorButton = function(page){
  //   var res=page >= $scope.totalPages;
  //   return res;
  // }

  // $scope.filterData = function(){
  //   $scope.currentPage = 0;
  //   $scope.filteredData = $filter('filter')($scope.columnsContent, $scope.q);
  //   $scope.updateTotalPages();
  // }


});