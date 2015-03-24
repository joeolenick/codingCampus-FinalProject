'use strict';

angular.module('myApp.mealPlanning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mealPlanning', {
    templateUrl: '/template/mealPlanning',
    controller: 'mealPlanningCtrl'
  });
}])

.controller('mealPlanningCtrl', [function() {

}]);