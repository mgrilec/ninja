(function() {
  'use strict';

  function Game() {
    
  }

  Game.prototype = {

    create: function () {
      var _this = this;

      // globals
      this.game.tileSize = 16;

      // create engine
      this.game.scheduler = new ROT.Scheduler.Simple();
      this.game.engine = new ROT.Engine(this.game.scheduler);

      // create map
      this.map = this.add.existing(new level.Map(this.game, "maps.camp"));

      // create player and add to scheduler
      this.player = this.add.existing(new beings.Human(this.game, "player", 0, 0));
      this.game.scheduler.add(this.player, true);

      // start engine
      this.game.engine.start();

      console.log(this);
    },

    update: function () {

    },

    render: function() {

    }

  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Game = Game;

}());
