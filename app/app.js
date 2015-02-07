'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.recipes',
  'myApp.addRecipe',
  'myApp.showRecipe',
  'myApp.version',
  'restangular',
  'myApp.Authentication',
  'myApp.register',
  'myApp.login',
  'myApp.navbar'
]).
config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes'});
  RestangularProvider.setBaseUrl('http://localhost:8001');
}])
.run(['$http', function($http){
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}])
;
