'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-recipe', {
            templateUrl: 'add-recipe/add-recipe.html',
            controller: 'AddRecipeCtrl'
        });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular', '$location', function($scope, Restangular, $location){

        $scope.recipe = {
            ingredients: []
        };

        $scope.addIngredientToRecipe = function(ingredientName){
          var ingredient = {name: ingredientName};
          $scope.recipe.ingredients.push(ingredient);
          $scope.ingredient = '';

          document.getElementById('ingredients').focus();
        };

        $scope.addRecipe = function(){
          Restangular.all('add-recipe').customPOST($scope.recipe).then(function(){
            $location.path('/recipes');
          })
        }
    }]);
