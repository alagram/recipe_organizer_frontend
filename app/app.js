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
  'myApp.register'
]).
config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes'});
  RestangularProvider.setBaseUrl('http://localhost:8001');
}]);
