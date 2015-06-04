(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {

    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
      this.game.input.maxPointers = 1;

      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  200;
      this.game.scale.minHeight = 150;
      this.game.scale.maxWidth = 800;
      this.game.scale.maxHeight = 600;
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setScreenSize(true);

      this.game.state.start('preloader');
    }
  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Boot = Boot;

}());

