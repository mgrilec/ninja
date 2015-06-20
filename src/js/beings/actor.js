var beings = beings || {};

beings.Actor = function(game, name, x, y, control) {
	Phaser.Sprite.call(this, game, x * game.tileSize, y * game.tileSize, 'characters', 'base.male.0');

	this.tx = x;
	this.ty = y;
	this.parts = {};

	// bottoms
	this.parts.bottoms = game.make.image(x, y, 'characters', 'bottoms.0');
	this.addChild(this.parts.bottoms);

	// shoes
	this.parts.shoes = game.make.image(x, y, 'characters', 'shoes.0');
	this.addChild(this.parts.shoes);

	// top
	this.parts.top = game.make.image(x, y, 'characters', 'top.0');
	this.addChild(this.parts.top);

	// hair
	this.parts.hair = game.make.image(x, y, 'characters', 'hair.0');
	this.addChild(this.parts.hair);

	// control
	this.control = new control(this);
	console.log(this);
};

beings.Actor.prototype = Object.create(Phaser.Sprite.prototype);
beings.Actor.prototype.constructor = beings.Actor;

beings.Actor.prototype.update = function() {
	var _this = this;

	this.x = this.tx * this.game.tileSize;
	this.y = this.ty * this.game.tileSize;

	this.control.update();
};

beings.Actor.prototype.act = function() {
	var _this = this;
	this.acting = true;
	this.game.engine.lock();
}

beings.Actor.prototype.endTurn = function() {
	this.acting = false;
	this.game.engine.unlock();
}

beings.Actor.prototype.move = function(dir) {

	var desired = new Phaser.Point(this.tx + dir.x, this.ty + dir.y);
	//console.log(this.game.map.getTiles(desired.x, desired.y))

	if (this.game.map.isSolid(desired.x, desired.y))
		return;

	this.tx += dir.x;
	this.ty += dir.y;

	this.endTurn();
}