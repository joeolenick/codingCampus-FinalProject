'use strict';

angular.module('myApp.myRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myRecipes', {
    templateUrl: '/template/myRecipes',
    controller: 'myRecipesCtrl'
  });
}])


.controller('myRecipesCtrl', [function() {

}])

.controller('myRecipesOptionsCtrl', [
  'srvc', 
  '$scope', 
  '$window', 
  function($service, $scope, $window) {
//Are you sure you want to delete this?
  $scope.deleteRecipe = function(index) {

    var deleteRecipeCheck = $window.confirm('Are you sure you want to delete?');

     if (deleteRecipeCheck) {
      $window.alert('Going to delete the user');
    }else{
      return;
    }

//Okay going to delete it now. 
    $service.getRecipeList()
    .then(function(recipeList) {
    $scope.recipeList = recipeList  });

    $service.deleteRecipe($scope.recipeList[index]._id)
    .then(function() {
      $scope.recipeList.splice(index, 1);
    });
  };

  $scope.editRecipe = function(index) {
    
  }

}])
