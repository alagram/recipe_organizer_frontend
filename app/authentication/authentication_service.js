'use strict';

angular.module('myApp.Authentication', ['ngCookies'])
  .factory('Authentication', ['$rootScope', '$cookieStore', 'Restangular', function($rootScope, $cookieStore, Restangular){
    var Authentication = {
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      register: register,
      login: login,
      logout: logout,
      setAuthenticatedAccount: setAuthenticatedAccount,
      unauthenticate: unauthenticate
    };

    $rootScope.signedIn = function(){
      return Authentication.isAuthenticated();
    }

    return Authentication;

    function getAuthenticatedAccount() {
      if (!$cookieStore.get('authenticatedAccount')) {
        return;
      }
      return JSON.parse($cookieStore.get('authenticatedAccount'));
    }

    function isAuthenticated() {
      return !!$cookieStore.get('authenticatedAccount');
    }

    function login(email, password) {
      return Restangular.all('api/v1/auth/login/').customPOST({
        email: email,
        password: password
      }).then(loginSuccessFn, loginErrorFn);

      function loginSuccessFn(data, status, headers, config) {
        Authentication.setAuthenticatedAccount(data);

        window.location = '/app';
      }

      function loginErrorFn(data, status, headers, config) {
        console.log('Something bad happened!');
      }
    }

    function logout() {
      return Restangular.all('api/v1/auth/logout/').customPOST().then(logoutSuccessFn, logoutErrorFn);

      function logoutSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        console.log("logged out");
        window.location = "/app";
      }

      function logoutErrorFn(data, status, headers, config) {
        console.log("Something bad happened!");
      }
    }

    function register(email, password, username) {
      Restangular.all('api/v1/accounts/').customPOST({
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

      function registerSuccessFn(data, status, headers, config) {
        Authentication.login(email, password);
      }

      function registerErrorFn(data, status, headers, config) {
        console.log('Something bad happened!');
      }
    }

    function setAuthenticatedAccount(account) {
      $cookieStore.put('authenticatedAccount', JSON.stringify(account));
    }

    function unauthenticate() {
      $cookieStore.remove('authenticatedAccount');
    }
  }])
