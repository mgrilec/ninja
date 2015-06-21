var beings = beings || {};
beings.control = beings.control || {}

beings.control.Player = function(actor) {
	this.actor = actor;

	this.cursors = actor.game.input.keyboard.createCursorKeys();
}

beings.control.Player.prototype.constructor = beings.control.Player;

beings.control.Player.prototype.update = function() {
	if (!this.actor.acting)
		return;

	if (this.cursors.left.justDown) {
		this.actor.move(new Phaser.Point(-1, 0));
		this.actor.game.map.refreshShadow(this.actor);
	}
	else if (this.cursors.right.justDown) {
		this.actor.move(new Phaser.Point(1, 0));
		this.actor.game.map.refreshShadow(this.actor);
	}
	else if (this.cursors.up.justDown) {
		this.actor.move(new Phaser.Point(0, -1));
		this.actor.game.map.refreshShadow(this.actor);
	}
	else if (this.cursors.down.justDown) {
		this.actor.move(new Phaser.Point(0, 1));
		this.actor.game.map.refreshShadow(this.actor);
	}
}