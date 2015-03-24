'use strict';

angular.module('myApp.viewRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewRecipes/:recipeIndex', {
    templateUrl: '/template/viewRecipes',
    controller: 'viewRecipesCtrl'
  });
}])

.controller('viewRecipesCtrl', ['$routeParams', 'srvc', '$scope', function($routeParams, $srvc, $scope) {
  $scope.recipe = $srvc.getIndividualRecipe($routeParams.recipeIndex);
}]);