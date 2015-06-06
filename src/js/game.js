(function() {
  'use strict';

  function Game() {
    
  }

  Game.prototype = {

    create: function () {
      var _this = this;
      this.player = this.add.existing(new beings.Human(this.game, "player", 0, 0));
      this.map = this.add.existing(new level.Map(this.game, 50, 50));
    },

    update: function () {

    },

    render: function() {

    }

  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Game = Game;

}());
