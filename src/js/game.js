(function() {
  'use strict';

  function Game() {
    
  }

  Game.prototype = {

    create: function () {
      var _this = this;

      // setup camera
      this.game.camera.scale.set(2, 2);

      this.player = this.add.existing(new beings.Human(this.game, "player", 0, 0));
      this.map = this.add.existing(new level.Map(this.game, "maps.camp"));

      console.log(this.game.camera);
    },

    update: function () {

    },

    render: function() {

    }

  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Game = Game;

}());
