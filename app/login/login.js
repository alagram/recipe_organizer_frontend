'use strict';

angular.module('myApp.login', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', '$location', 'Authentication', function($scope, $location, Authentication){
    activate();

    $scope.login = function(){
     Authentication.login($scope.email, $scope.password);
    }

    function activate() {
      if (Authentication.isAuthenticated()) {
        $location.path('/recipes');
      }
    }
  }])
