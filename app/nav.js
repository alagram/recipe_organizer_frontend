'use strict';

angular.module('myApp.navbar', [])
  .controller('NavbarCtrl', ['$scope', 'Authentication', function($scope, Authentication){
    $scope.logout = function(){
      Authentication.logout();
    }
  }])
