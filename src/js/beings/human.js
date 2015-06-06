var beings = beings || {}

beings.Human = function(game, name, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'characters', 'base.male.0');

	this.parts = {}

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
	this.parts.hair = game.make.image(x, y, 'characters', 'hair.1');
	this.addChild(this.parts.hair);
}

beings.Human.prototype = Object.create(Phaser.Sprite.prototype);
beings.Human.prototype.constructor = beings.Human;

beings.Human.prototype.update = function() {

}