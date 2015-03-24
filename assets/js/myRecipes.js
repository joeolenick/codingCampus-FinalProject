'use strict';

angular.module('myApp.myRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myRecipes', {
    templateUrl: '/template/myRecipes',
    controller: 'myRecipesCtrl'
  });
}])

.controller('myRecipesCtrl', [function() {

}]);