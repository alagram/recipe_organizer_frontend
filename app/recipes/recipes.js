'use strict';

angular.module('myApp.recipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes.html',
    controller: 'RecipesCtrl'
  });
}])

.controller('RecipesCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.all('recipes').getList().then(function(data) {
        $scope.recipes = data;
    })
}]);