'use strict';

angular.module('myApp.eventPlanning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eventPlanning', {
    templateUrl: '/template/eventPlanning',
    controller: 'eventPlanningCtrl'
  });
}])

.controller('eventPlanningCtrl', [function() {

}]);