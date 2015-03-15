'use strict';

angular.module('myApp.myRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myRecipes', {
    templateUrl: 'views/myRecipes/myRecipes.tpl.html',
    controller: 'myRecipesCtrl'
  });
}])

.controller('myRecipesCtrl', [function() {

}]);