'use strict';

angular.module('myApp.showRecipe', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/recipes/:recipeId', {
        templateUrl: 'show-recipe/show-recipe.html',
        controller: 'ShowRecipeCtrl'
      });
    }])

  .controller('ShowRecipeCtrl', ['$scope', 'Restangular', '$routeParams', '$location', function($scope, Restangular, $routeParams, $location) {
    $scope.recipeId = $routeParams.recipeId;

    Restangular.one('recipes', $scope.recipeId).customGET().then(function(data) {
        $scope.recipe = data;
    });

    $scope.postComment = function(){

      var commentBody = {
        body: $scope.commentBody,
        recipe: $scope.recipe.id
      };

      // construct url: recipes/:id/comments/
      var restangularComments = Restangular.one('recipes', $scope.recipeId).one('comments/');

      restangularComments.customPOST(commentBody).then(function(comment){
        $scope.recipe.comments.push(comment);
      });

      $scope.commentBody = '';
    }

  }]);
