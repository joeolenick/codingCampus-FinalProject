'use strict';

angular.module('myApp.mealPlanning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mealPlanning', {
    templateUrl: 'views/mealPlanning/mealPlanning.tpl.html',
    controller: 'mealPlanningCtrl'
  });
}])

.controller('mealPlanningCtrl', [function() {

}]);