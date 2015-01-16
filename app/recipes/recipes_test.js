'use strict';

describe('myApp.recipes module', function() {

  beforeEach(module('myApp.view1'));

  describe('recipes controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('RecipesCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});