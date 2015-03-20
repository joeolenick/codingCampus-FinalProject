'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('recipe', [
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
}])

app.directive("offcanvas", function() {
  $(document).ready(function (scope, element, attributes) {
      $('[data-toggle="offcanvas"]').on("click", function() {
              $('.row-offcanvas').toggleClass('active');
      }
  }
}
