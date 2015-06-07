var level = level || {};

level.Map = function(game, key) {
	var _this = this;

	Phaser.Group.call(this, game);

	this.map = game.add.tilemap(key);

	// load tileset images
	_.each(this.map.tilesets, function(t) {
		this.map.addTilesetImage(t.name, t.name);
	}, this);

	// create layers
	_.each(this.map.layers, function(l) {
		this.map.createLayer(l.name);
	}, this);

	//console.log(this.map);
	//game.add.existing(this.map);
};

level.Map.prototype = Object.create(Phaser.Group.prototype);
level.Map.prototype.constructor = level.Map;

level.Map.prototype.update = function() {

};