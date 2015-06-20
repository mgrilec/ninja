var level = level || {};

level.Map = function(game, key) {
	var _this = this;

	Phaser.Group.call(this, game);

	this.tilemap = game.add.tilemap(key);

	// load map tileset images
	_.each(this.tilemap.tilesets, function(t) {
		this.tilemap.addTilesetImage(t.name, t.name);
	}, this);

	// create map layers
	_.each(this.tilemap.layers, function(l) {
		this.tilemap.createLayer(l.name);
	}, this);
};

level.Map.prototype = Object.create(Phaser.Group.prototype);
level.Map.prototype.constructor = level.Map;

level.Map.prototype.update = function() {

};

level.Map.prototype.getTiles = function(x, y) {
	var tiles = []
	for (var li = 0; li < this.tilemap.layers.length; li++) {
		var tile = this.tilemap.getTile(x, y, li);
		if (tile) {
			tiles.push(tile);
		}
	}

	return tiles;
}

level.Map.prototype.isSolid = function(x, y) {
	return _.some(this.getTiles(x, y), function(t) {
		return t.properties.solid === "true";
	});
}