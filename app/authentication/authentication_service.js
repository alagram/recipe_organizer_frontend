'use strict';

angular.module('myApp.recipes', ['ngCookies'])
  .factory('Authentication', ['$cookies', 'Restangular', function($cookies, Restangular){
    var Authentication = {
      register: register
    };

    return Authentication;

    function register(email, password, username) {
      Restangular.all('api/v1/accounts/').customPOST({
        username: username,
        password: password,
        email: email
      });
    }
  }])
