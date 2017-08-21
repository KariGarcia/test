angular.module('DeliveryApp')

.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
})
.component('grid', {
    templateUrl: 'components/templates/grid/grid.html'
    , controller : GridCtrl
    , bindings:{
      columnsConfig: "="
      , content: "="
      , pageSize: "="
    }
})

function GridCtrl($scope, $filter){
  $scope.q= {};
  $scope.currentPage = 0;
  $scope.totalPages = 0;
  $scope.pageSize = this.pageSize
  $scope.columnsConfig  = this.columnsConfig;
  $scope.columnsContent = this.content;

  $scope.propertyName = null;
  for(var column in $scope.columnsConfig){
    if(column.isSortable){
      $scope.propertyName = column.propertyName;
      return;
    }
  }
  $scope.reverse = true;
  $scope.filteredData = $filter('orderBy')($scope.columnsContent, $scope.propertyName, $scope.reverse);
  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    if($scope.columnsConfig[propertyName].sortFunction){
      $scope.columnsConfig[propertyName].sortFunction();
    } else{
      $scope.filteredData = $filter('orderBy')($scope.filteredData, $scope.propertyName, $scope.reverse);
    }
  };

  $scope.createSimpleArray = function(length){
    return new Array(+length);
  }

  $scope.updateTotalPages = function(){
    $scope.totalPages = Math.ceil($scope.filteredData.length / $scope.pageSize);
  }
  $scope.updateTotalPages();

  $scope.changePage = function(page){
    $scope.currentPage = page;
  }

  $scope.hidePaginatorButton = function(page){
    var res=page >= $scope.totalPages;
    return res;
  }

  $scope.filterData = function(){
    $scope.currentPage = 0;
    $scope.filteredData = $filter('filter')($scope.columnsContent, $scope.q);
    $scope.updateTotalPages();
  }
}