import gameWebSocket from './webSoc.js';

const PLAYER_RADIUS = 16;
class GameScene extends Phaser.Scene {
    constructor() {
        super("scene-game");
        this.cursors;
        this.player;
        this.username;
        this.colorsList = [0x4ecdc4, 0xff6b6b, 0xf7b32b, 0x1a535c, 0xb388eb];
        this.remotePlayers = new Map();
    }

    create() {
        // Create circle and enable physics
        let x = Math.random() * 800;
        let y = Math.random() * 600;
        this.player = this.add.circle(
            x, // X coordinate between 0 and 800
            y, // Y coordinate between 0 and 600
            PLAYER_RADIUS,
            this.colorsList[Math.floor(Math.random() * 5)] // Random color from colorsList
        );
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        gameWebSocket.onPlayerPositionUpdate = (position) => {
            if (this.remotePlayers.has(position.username)) {
                let player = this.remotePlayers.get(position.username)
                player.x = position.x;
                player.y = position.y;
            }
        };

        gameWebSocket.onPlayerJoining = (newPlayer) => {

            const circle = this.add.circle(
                newPlayer.x,
                newPlayer.y,
                PLAYER_RADIUS,
                this.colorsList[Math.floor(Math.random() * 5)]
            );
            this.remotePlayers.set(newPlayer.username, newPlayer);
        }

        gameWebSocket.connect();

        this.sendPlayerPosition();
    }

    update() {
        let speed = 3;
        let moved = false;
        if (this.cursors.left.isDown) {
            this.player.x -= speed;
            moved = true;
        }
        if (this.cursors.right.isDown) {
            this.player.x += speed;
            moved = true;
        }
        if (this.cursors.up.isDown) {
            this.player.y -= speed;
            moved = true;
        }
        if (this.cursors.down.isDown) {
            this.player.y += speed;
            moved = true;
        }

        if (moved) {
            this.sendPlayerPosition();
        }
    }

    sendPlayerPosition() {
        gameWebSocket.sendPlayerPosition({
            x: this.player.x,
            y: this.player.y,
            playerId: this.playerId
        })
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