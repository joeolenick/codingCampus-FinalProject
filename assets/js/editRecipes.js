'use strict';

angular.module('myApp.editRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editRecipes/:recipeIndex', {
    templateUrl: '/template/editRecipes',
    controller: 'editRecipesCtrl'
  });
}])

.controller('editRecipesCtrl', ['$routeParams', 'srvc', '$scope', function($routeParams, $srvc, $scope) {
  $scope.recipe = $srvc.getIndividualRecipe($routeParams.recipeIndex);
}])

.controller('editRecipesOptionsCtrl', function ($scope) {
	$scope.viewField = {};
	$scope.modify = function(index){

        $scope.viewField[index] = true;
    };


    $scope.update = function(index){

        $scope.viewField[index] = false;
    };
})
