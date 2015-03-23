'use strict';

// Declare app level module which depends on views, and components
angular.module('recipe', [
  'ngRoute',
  'myApp.publicRecipes',
  'myApp.viewRecipes',
  'myApp.myRecipes',
  'myApp.editRecipes',
  'myApp.mealPlanning',
  'myApp.eventPlanning',
  'myApp.friendsFamily',
  'myApp.shoppingList'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/publicRecipes'});
}])

.service('srvc', [ '$http', '$q', function($http, $q) {

  this.getRecipeList = function() {
    var dfd = $q.defer();

    $http({
      method:'GET',
      url:'/recipes/',
    })
    .success(function(data) {
      return dfd.resolve(data);
    })
    .error(function(err) {
      return dfd.reject(err);
    });

    return dfd.promise;
  };

}])

.controller('recipeListctrl', [ 'srvc', '$scope', function($service, $scope) {
  $service.getRecipeList()
  .then(function(recipeList) {
    console.log(recipeList);
  $scope.recipeList = recipeList;
  console.log(recipeList);
  });

}]);