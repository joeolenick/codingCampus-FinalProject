'use strict';

angular.module('myApp.friendsFamily', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/friendsFamily', {
    templateUrl: '/template/friendsFamily',
    controller: 'friendsFamilyCtrl'
  });
}])

.controller('friendsFamilyCtrl', [function() {

}]);