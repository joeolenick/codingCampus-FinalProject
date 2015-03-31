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