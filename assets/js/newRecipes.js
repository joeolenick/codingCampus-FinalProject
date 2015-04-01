'use strict';

angular.module('myApp.newRecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newRecipes/', {
    templateUrl: '/template/newRecipes',
    controller: 'newRecipesCtrl'
  });
}])


.controller('newRecipesCtrl', [function() {

}])




.controller('newRecipesIngredientOptionsCtrl', function ($scope) {
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

.controller('newRecipesInstructionsOptionsCtrl', function ($scope) {
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




.controller('newRecipesPutCtrl', [ 'srvc', '$scope', function($service, $scope) {
  $scope.form = {};

  $scope.consoleLog = function(index){
    console.log($scope.recipe);
    console.log($scope.recipe._id);

   }
// Actually saving information back to the database. 
  $scope.putRecipe = function(index) {
    $service.putRecipe($scope.recipe._id)
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