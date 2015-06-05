var beings = beings || {}

beings.Human = function(game, name, x, y) {
	Phaser.Group.call(this, game, undefined, name);

	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;

	// base
	this.base = new Phaser.Sprite(game, x, y, 'characters', 'base.male1');
	this.base.smoothed = false;
	this.base.name = 'base';
	this.add(this.base);
}

beings.Human.prototype = Object.create(Phaser.Group.prototype);
beings.Human.prototype.constructor = beings.Human;

beings.Human.prototype.update = function() {

}