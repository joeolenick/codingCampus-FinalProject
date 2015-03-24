'use strict';

angular.module('myApp.editRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editRecipes', {
    templateUrl: '/template/editRecipes',
    controller: 'editRecipesCtrl'
  });
}])

.controller('editRecipesCtrl', [function() {

}]);