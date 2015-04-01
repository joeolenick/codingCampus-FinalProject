'use strict';

angular.module('myApp.editRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editRecipes/:recipeIndex', {
    templateUrl: '/template/editRecipes',
    controller: 'editRecipesCtrl'
  });
}])
//controller for view, bring in recipe from link used to get to this page.
.controller('editRecipesCtrl', ['$routeParams', 'srvc', '$scope', function($routeParams, $srvc, $scope) {
  $scope.recipe = $srvc.getIndividualRecipe($routeParams.recipeIndex);
}])

.controller('editRecipesIngredientOptionsCtrl', function ($scope) {
  $scope.viewField = {};

  $scope.modify = function(index){

    $scope.viewField[index] = true;
  };


  $scope.update = function(index){

    $scope.viewField[index] = false;

  };

  $scope.deleteIngredient = function(index){
    if($scope.recipe.ingredientList.length > 1){
      $scope.recipe.ingredientList.splice(index, 1);
    }else{
      return;
    }
  };

  $scope.addIngredientRow = function(index){
      $scope.recipe.ingredientList.splice(index +1, 0, {item: " ", amount:" ", unitOfMeasure: " "})
      $scope.viewField[index + 1] = true;
  };

})

.controller('editRecipesInstructionsOptionsCtrl', function ($scope) {
  $scope.viewField = {};
  $scope.modify = function(index){

    $scope.viewField[index] = true;
  };

  $scope.update = function(index){

    $scope.viewField[index] = false;
  };

  $scope.deleteInstruction = function(index){
    if($scope.recipe.instructions.length > 1){
      $scope.recipe.instructions.splice(index, 1);
    }else{
      return;
    }
  };

  $scope.addInstructionRow = function(index){
    $scope.recipe.instructions.splice(index +1, 0, " ")
    $scope.viewField[index + 1] = true;
  };
})




.controller('editRecipesPutCtrl', [ 'srvc', '$scope', function($service, $scope) {
  $scope.form = {};

  $scope.consoleLog = function(index){
    console.log($scope.recipe);
    console.log($scope.recipe._id);

   }
// Actually saving information back to the database. 
  $scope.putRecipe = function(index) {
    $service.putRecipe($scope.recipe)
    };
  

  $scope.modify = function(index){

    $scope.viewField = true;
  };


  $scope.update = function(index){

    $scope.viewField = false;

  };

  $scope.deleteMealType = function(index){
    if($scope.recipe.mealType.length > 1){
      $scope.recipe.mealType.splice(index, 1);
    }else{
      return;
    }
  };

  $scope.addMealTypeRow = function(index){
    $scope.recipe.mealType.splice(index +1, 0, " ")
  };
}
]);