'use strict';

angular.module('myApp.register', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
  }])

  .controller('RegisterCtrl', ['$scope', '$location', 'Authentication', function($scope, $location, Authentication){
    $scope.register = function(){
      Authentication.register($scope.email, $scope.password, $scope.username);
    }
  }])
