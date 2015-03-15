'use strict';

angular.module('myApp.editRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editRecipes', {
    templateUrl: 'views/editRecipes/editRecipes.tpl.html',
    controller: 'editRecipesCtrl'
  });
}])

.controller('editRecipesCtrl', [function() {

}]);