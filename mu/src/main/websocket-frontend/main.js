import gameWebSocket from './webSoc.js';

const PLAYER_RADIUS = 16;

class GameScene extends Phaser.Scene {
    constructor() {
        super("scene-game");
        this.cursors;
        this.player;
        this.username="local";
        this.avatarId;
        this.roomId;
        this.colorsList = [0x4ecdc4, 0xff6b6b, 0xf7b32b, 0x1a535c, 0xb388eb];
        this.remotePlayers = new Map();
    }

    create() {
        console.log("Inside the create method")

        this.physics.world.setBounds(0, 0, 800, 600);

        gameWebSocket.initialPlayerState = playerState => {
            const currentPlayer = playerState.currentPlayer;
            const players = playerState.allPlayers || []; // Fallback to empty array

            // Iterate over `players`, not `playerState`
            players.forEach(player => {
                console.log(`Processing player: ${player.userName}, with room id: ${player.roomId}`);

                const circle = this.add.circle(
                    player.x,
                    player.y,
                    PLAYER_RADIUS,
                    this.colorsList[Math.floor(Math.random() * 5)]
                );

                if (player.userName === currentPlayer.userName) { // Use currentPlayer.userName
                    console.log("Current player:", player.userName);
                    this.username = player.userName;
                    this.avatarId = player.avatarId;
                    this.roomId = player.roomId;
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


        gameWebSocket.joinedPlayerState = playerState => {

            console.log(`Username of joined player: ${playerState.userName}`);
            console.log(`Username of local player: ${this.username}`)
            if (this.username !== "local" && playerState.userName !== this.username) {
                console.log("Making of the circle")
                const circle = this.add.circle(
                    playerState.x,
                    playerState.y,
                    PLAYER_RADIUS,
                    this.colorsList[Math.floor(Math.random() * 5)]
                );
                this.remotePlayers.set(playerState.userName, circle);
            }
        };

        gameWebSocket.playerMovedState = playerState => {
            console.log("updating the state of the moved state")
            let movedUsername = playerState.userName;

            if (this.username !== "local" && this.username !== movedUsername) {

                let remotePlayerCircle = this.remotePlayers.get(movedUsername);

                console.log(`The circle of ${playerState.userName}: ${remotePlayerCircle}`);

                if (remotePlayerCircle) {
                    remotePlayerCircle.x = playerState.x;
                    remotePlayerCircle.y = playerState.y;
                    console.log(`Updated ${movedPlayerName} position to (${playerState.x}, ${playerState.y})`);
                } else {
                    console.log("Remote player not found");
                }
            }

        }


        gameWebSocket.connect();
    }

    update() {

        let moved = false;

        // Check if player exists before trying to move it
        if (!this.player) return;

        let speed = 5;

        if (this.cursors.left.isDown) {
            moved = true;
            this.player.x -= speed;
        }
        if (this.cursors.right.isDown) {
            moved = true;
            this.player.x += speed;
        }
        if (this.cursors.up.isDown) {
            moved = true;
            this.player.y -= speed;
        }
        if (this.cursors.down.isDown) {
            moved = true;
            this.player.y += speed;
        }

        if (moved) {
            let newX = this.player.x;
            let newY = this.player.y;

            const playerState = {
                userName: this.username,
                x: newX,
                y: newY,
                avatarId: this.avatarId,
                roomId: this.roomId
            };
            console.log(`Sending player position: ${playerState.x} & ${playerState.y}, of roomId: ${playerState.roomId}`)
            gameWebSocket.sendPlayerPosition(playerState);
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