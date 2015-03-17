'use strict';

angular.module('myApp.eventPlanning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eventPlanning', {
    templateUrl: 'views/eventPlanning/eventPlanning.tpl.html',
    controller: 'eventPlanningCtrl'
  });
}])

.controller('eventPlanningCtrl', [function() {

}]);