'use strict';

angular.module('myApp.publicRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/publicRecipes', {
    templateUrl: '/template/publicRecipes',
    controller: 'publicRecipesCtrl'
  });
}])

.controller('publicRecipesCtrl', [function() {

}]);