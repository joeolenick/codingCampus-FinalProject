'use strict';

angular.module('myApp.publicRecipes',  ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/publicRecipes', {
    templateUrl: '/template/publicRecipes',
    controller: 'publicRecipesCtrl'
  });
}])

.controller('publicRecipesCtrl', [function() {

}])

.controller('recipeListctrl', [ 'srvc', '$scope', function($service, $scope) {
  $service.getRecipeList()
  .then(function(recipeList) {
    $scope.recipeList = recipeList;
  });
}]);

