'use strict';

angular.module('myApp.viewRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewRecipes', {
    templateUrl: 'views/viewRecipes/viewRecipes.tpl.html',
    controller: 'viewRecipesCtrl'
  });
}])

.controller('viewRecipesCtrl', [function() {

}]);