(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);

      this.loadResources();
    },

    loadResources: function () {

      // load tiles
      this.load.image('environment', 'assets/tiles/environment.png');
      this.load.atlasXML('characters', 'assets/tiles/characters.png', 'assets/tiles/characters.xml');

      // load maps
      this.load.tilemap('maps.camp', 'assets/maps/camp.json', null, Phaser.Tilemap.TILED_JSON);

      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['ninja'] = window['ninja'] || {};
  window['ninja'].Preloader = Preloader;

}());
