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
        console.log("Inside the create method")

        this.physics.world.setBounds(0, 0, 800, 600);

        gameWebSocket.initialPlayerState = (playerState) => {
            console.log("Inside the initialPlayerState method: ", playerState)

            for (let i = 0; i < playerState.length; i++) {
                if (i == playerState.length - 1) {
                    console.log(`player: ${playerState[i].userName}`);
                    this.username = playerState[i].userName;

                    this.player = this.add.circle(
                        10, // X coordinate between 0 and 800
                        100, // Y coordinate between 0 and 600
                        PLAYER_RADIUS,
                        this.colorsList[Math.floor(Math.random() * 5)] // Random color from colorsList
                    );
                    this.physics.add.existing(this.player);
                    this.player.body.setCollideWorldBounds(true);
                    this.cursors = this.input.keyboard.createCursorKeys();

                } else {
                    console.log("remote player added");
                    const circle = this.add.circle(
                        playerState[i].x,
                        playerState[i].y,
                        PLAYER_RADIUS,
                        this.colorsList[Math.floor(Math.random() * 5)]
                    );
                    this.remotePlayers.set(playerState[i].userName, circle);
                }
            }
        }

        gameWebSocket.connect();
    }

    update() {
        // Check if player exists before trying to move it
        if (!this.player) return;

        let speed = 5;

        if (this.cursors.left.isDown) {
            this.player.x -= speed;
        }
        if (this.cursors.right.isDown) {
            this.player.x += speed;
        }
        if (this.cursors.up.isDown) {
            this.player.y -= speed;
        }
        if (this.cursors.down.isDown) {
            this.player.y += speed;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false // Set to true if you want to see physics bodies
        }
    },
    scene: [GameScene]
};

new Phaser.Game(config);