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
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/publicRecipes'});
}]);
