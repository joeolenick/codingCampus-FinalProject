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

}])
