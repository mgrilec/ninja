var beings = beings || {};

beings.Human = function(game, name, x, y) {
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
	this.cursors = game.input.keyboard.createCursorKeys();
	this.acting = true;
};

beings.Human.prototype = Object.create(Phaser.Sprite.prototype);
beings.Human.prototype.constructor = beings.Human;

beings.Human.prototype.update = function() {
	var _this = this;

	this.x = this.tx * this.game.tileSize;
	this.y = this.ty * this.game.tileSize;
	//console.log(this.game.tileSize);

	if (this.acting) {
		if (this.cursors.left.justDown) {
			this.tx--;
			this.game.engine.unlock();
		}
		else if (this.cursors.right.justDown) {
			this.tx++;
			this.game.engine.unlock();
		}
		else if (this.cursors.up.justDown) {
			this.ty--
			this.game.engine.unlock();
		}
		else if (this.cursors.down.justDown) {
			this.ty++;
			this.game.engine.unlock();
		}
	}
};

beings.Human.prototype.act = function() {
	var _this = this;
	this.game.engine.lock();
}