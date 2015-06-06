var level = level || {};

level.Map = function(game, width, height) {
	var _this = this;

	Phaser.Group.call(this, game);

	this.mapWidth = width;
	this.mapHeight = height;
	this.map = {};

	this.generator = new ROT.Map.DividedMaze(width, height);
	this.generator.create(function(x, y, value) {
		_this.map[y * _this.mapWidth + x] = value;
	});

	for (var i in this.map) {
		var value = this.map[i];
		var x = i % this.mapWidth;
		var y = Math.floor(i / this.mapWidth);

		if (value == 0) {
			this.add(game.make.image(x * 16, y * 16, "environment", "ground.dirt.0"));
		} else {
			this.add(game.make.image(x * 16, y * 16, "environment", "wall.sand.0"));
		}
	}
};

level.Map.prototype = Object.create(Phaser.Group.prototype);
level.Map.prototype.constructor = level.Map;

level.Map.prototype.update = function() {

};