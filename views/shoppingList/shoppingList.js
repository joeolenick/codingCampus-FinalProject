'use strict';

angular.module('myApp.shoppingList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingList', {
    templateUrl: 'views/shoppingList/shoppingList.tpl.html',
    controller: 'shoppingListCtrl'
  });
}])

.controller('shoppingListCtrl', [function() {

}]);