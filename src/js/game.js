(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      this.player = this.add.existing(new beings.Human(this.game, "player", 0, 0));
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {

    },

    onInputDown: function () {
      //this.game.state.start('menu');
    },

    render: function() {

    }

  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Game = Game;

}());
