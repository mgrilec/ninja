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

	// create fov
	this.fov = new ROT.FOV.PreciseShadowcasting(function(x, y) {
		return !_this.isSolid(x, y);
	});

	// get shadow
	var shadowTilesetIndex = this.tilemap.getTilesetIndex("shadow");
	var shadowTileset = this.tilemap.tilesets[shadowTilesetIndex];
	this.shadowIndex = shadowTileset.firstgid;
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

level.Map.prototype.refreshShadow = function(actor) {
	var _this = this;

	// clear shadow
	this.tilemap.fill(this.shadowIndex, 0, 0, this.tilemap.width, this.tilemap.height, "fov");

	// run compute
	this.fov.compute(actor.worldX, actor.worldY, 10, function(x, y, r, visibility) {
		_this.tilemap.putTile(null, x, y, "fov");
	});
}