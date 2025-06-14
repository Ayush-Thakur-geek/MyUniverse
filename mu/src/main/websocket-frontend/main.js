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
            console.log("Initial players data received:", playerState);

            const currentPlayer = playerState.currentPlayer;
            const players = playerState.allPlayers || []; // Fallback to empty array

            // Iterate over `players`, not `playerState`
            players.forEach(player => {
                console.log("Processing player:", player.userName);

                const circle = this.add.circle(
                    player.x,
                    player.y,
                    PLAYER_RADIUS,
                    this.colorsList[Math.floor(Math.random() * 5)]
                );

                if (player.userName === currentPlayer.userName) { // Use currentPlayer.userName
                    console.log("Current player:", player.userName);
                    this.username = player.userName;
                    this.player = circle;
                    this.physics.add.existing(this.player);
                    this.player.body.setCollideWorldBounds(true);
                    this.cursors = this.input.keyboard.createCursorKeys();
                } else {
                    console.log("Remote player:", player.userName);
                    this.remotePlayers.set(player.userName, circle);
                }
            });
        };


        gameWebSocket.joinedPlayerState = (playerState) => {
            console.log(`joined player: ${playerState}`);
            if (playerState.userName !== this.username) { // ✅ Use userName
                const circle = this.add.circle(playerState.x, playerState.y, PLAYER_RADIUS, /* ... */);
                this.remotePlayers.set(playerState.userName, circle); // ✅ Use userName
            }
        };


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