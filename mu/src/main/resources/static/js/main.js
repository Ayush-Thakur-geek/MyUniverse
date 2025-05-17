// import Phaser from 'phaser'

console.log("hello")

const PLAYER_RADIUS = 16;
class GameScene extends Phaser.Scene {
    cursors;
    player;

    create() {
        // Create circle and enable physics
        this.player = this.add.circle(400, 300, PLAYER_RADIUS, 0x4ecdc4);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        let speed = 3;
        if (this.cursors.left.isDown)  this.player.x -= speed;
        if (this.cursors.right.isDown) this.player.x += speed;
        if (this.cursors.up.isDown)    this.player.y -= speed;
        if (this.cursors.down.isDown)  this.player.y += speed;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: 0x000000, // Use black (or another valid color)
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [GameScene]
};

new Phaser.Game(config);