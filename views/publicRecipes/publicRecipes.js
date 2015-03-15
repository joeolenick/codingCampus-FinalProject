'use strict';

angular.module('myApp.publicRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/publicRecipes', {
    templateUrl: 'views/publicRecipes/publicRecipes.tpl.html',
    controller: 'publicRecipesCtrl'
  });
}])

.controller('publicRecipesCtrl', [function() {

}]);