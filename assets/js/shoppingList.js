'use strict';

angular.module('myApp.shoppingList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingList', {
    templateUrl: '/template/shoppingList',
    controller: 'shoppingListCtrl'
  });
}])

.controller('shoppingListCtrl', [function() {

}]);