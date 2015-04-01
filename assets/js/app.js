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
  'myApp.shoppingList',
  'myApp.newRecipes'
])
.factory('authInterceptor', [ function() {
  return {
    request : function(config) {
      config.headers['Authorization'] = 'SuperSecretPasswordStoredInPlainText';
      return config;
    }
  };
}])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: '/publicRecipes'});
  $httpProvider.interceptors.push('authInterceptor');
}])

.service('srvc', [ '$http', '$q', function($http, $q) {
  var recipes;
  this.getIndividualRecipe = function(index) {
    return recipes[index];
  };
  
  this.getRecipeList = function() {
    var dfd = $q.defer();

    if (!recipes) {
      $http({
        method:'GET',
        url:'/recipes/',
      })
      .success(function(data) {
        recipes = data;
        return dfd.resolve(recipes);
      })
      .error(function(err) {
        return dfd.reject(err);
      });
    } else {
      dfd.resolve(recipes);
    }

    return dfd.promise;
  };

  this.deleteRecipe = function(id) {
  var dfd = $q.defer();

    $http({
      method:'DELETE',
      url:'/recipes/' + id
    })
    .success(function(data) {
      return dfd.resolve(data);
    })
    .error(function(err) {
      return dfd.reject(err);
    });

    return dfd.promise;
  };

 this.putRecipe = function(recipe) {
    var dfd = $q.defer();
      console.log(recipe);
    $http({
      method:'PUT',
      url:'/recipes/',
      data:recipe
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

.service('cartService', function(){
  this.cart = [];
})
.controller('viewRecipesOptions', function ($scope, cartService) {
  $scope.addtoShoppingList = function(){

    for(var i in $scope.recipe.ingredientList){
      cartService.cart.push($scope.recipe.ingredientList[i])
    }
    console.log('Making It!')

    $scope.listCount = cartService.cart.length;
    $scope.cart = cartService.cart;
  }
    
})


