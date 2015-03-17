'use strict';

angular.module('myApp.friendsFamily', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/friendsFamily', {
    templateUrl: 'views/friendsFamily/friendsFamily.tpl.html',
    controller: 'friendsFamilyCtrl'
  });
}])

.controller('friendsFamilyCtrl', [function() {

}]);