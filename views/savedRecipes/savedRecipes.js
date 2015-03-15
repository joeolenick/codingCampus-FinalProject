'use strict';

angular.module('myApp.savedRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/savedRecipes', {
    templateUrl: 'views/savedRecipes/savedRecipes.tpl.html',
    controller: 'savedRecipesCtrl'
  });
}])

.controller('savedRecipesCtrl', [function() {

}]);