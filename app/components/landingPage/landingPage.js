'use strict';

angular.module('DeliveryApp.landingPage',[])

.controller('LandingPageCtrl', function($scope, $filter) {

  this.pageSize = 5
  this.columnsConfig  = {
    "Nombre":{ propertyName:"name", isSortable: true, sortFunction:false}
    , "Dirección":{ propertyName:"adress", isSortable: false, sortFunction:false}
    , "Teléfono":{ propertyName:"phone", isSortable: false, sortFunction:false}
  }
  this.columnsContent = []

  for (var i = 0; i < 20; i++) {
    this.columnsContent.push({
      id: i
      , name: "restaurante"+i
      , adress: "direccion"+i
      , phone: "phone"+i
    })
  }

});