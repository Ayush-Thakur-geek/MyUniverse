import gameWebSocket from './webSoc.js';
import PhaserVideoManager from './PhaserVideoManager.js';

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
        this.movePending = false;
        this.videoManager = null;
        this.videoSessionActive = false;
    }

    create() {
        console.log("Inside the create method");

        // Initialize video manager
        this.videoManager = new PhaserVideoManager(this);
        gameWebSocket.setVideoManager(this.videoManager);

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
                    gameWebSocket.setCurrentUser(this.username);
                    gameWebSocket.requestVideoToken();
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
                    console.log(`Updated ${movedUsername} position to (${playerState.x}, ${playerState.y})`);
                } else {
                    console.log("Remote player not found");
                }
            }

        }
        // Fix 3: Enhanced onCanMove callback
        gameWebSocket.onCanMove = (allowed) => {
            this.movePending = false;

            if (!allowed) {
                console.log("Move not allowed, reverting position");
                // Move not allowed: revert to previous position
                this.player.x = this.prevPlayerX;
                this.player.y = this.prevPlayerY;
            } else {
                console.log("Move allowed, position confirmed");
                // Position is already updated optimistically, no need to move again
            }
        };

        // Video-related callbacks
        gameWebSocket.onVideoSession = (videoSessionData) => {
            // if (videoSessionData.success) {
            //     console.log("Video session was successfully: ", videoSessionData);
            //     this.initializeVideoSession(videoSessionData);
            // } else {
            //     console.error("Failed to get video session:", videoSessionData.error);
            // }
            this.initializeVideoSession(videoSessionData);
        };

        gameWebSocket.onVideoProximityUpdate = (proximityUpdate) => {
            if (proximityUpdate.targetUser === this.username) {
                if (proximityUpdate.enteringUsers.length > 0) {
                    console.log("Users entering proximity:", proximityUpdate.enteringUsers);
                    this.videoManager.handleUsersEnterProximity(proximityUpdate.enteringUsers);
                }
                if (proximityUpdate.leavingUsers.length > 0) {
                    console.log("Users leaving proximity:", proximityUpdate.leavingUsers);
                    this.videoManager.handleUsersLeaveProximity(proximityUpdate.leavingUsers);
                }
            }
        };

        gameWebSocket.onPlayerLeft = (leftPlayer) => {
            console.log("Player left the game:", leftPlayer.userName);

            // Remove from remote players
            const playerCircle = this.remotePlayers.get(leftPlayer.userName);
            if (playerCircle) {
                playerCircle.destroy();
                this.remotePlayers.delete(leftPlayer.userName);
            }

            // Remove from video manager
            if (this.videoManager) {
                this.videoManager.removeUser(leftPlayer.userName);
            }
        };

        // Setup keyboard controls for video
        this.setupVideoControls();

        gameWebSocket.connect();
    }

    async initializeVideoSession(videoSessionData) {
        try {
            console.log("Initialized video session:", videoSessionData);
            const success = await this.videoManager.initializeSession(
                videoSessionData.roomId,
                videoSessionData.token,
                this.username
            );

            if (success) {
                this.videoSessionActive = true;
                // this.updateUIStatus('🟢 Video Connected');
                console.log('Video session initialized in game scene');
            } else {
                // this.updateUIStatus('🔴 Video Failed');
            }

        } catch (error) {
            console.error('Failed to initialize video session in game scene:', error);
            // this.updateUIStatus('🔴 Video Error');
        }
    }

    setupVideoControls() {
        // V key to toggle video
        this.input.keyboard.on('keydown-V', () => {
            if (this.videoManager) {
                const videoOn = this.videoManager.toggleVideo();
                console.log('Video toggled:', videoOn ? 'ON' : 'OFF');
                this.updateVideoButton(videoOn);
            }
        });

        // M key to toggle audio
        this.input.keyboard.on('keydown-M', () => {
            if (this.videoManager) {
                const audioOn = this.videoManager.toggleAudio();
                console.log('Audio toggled:', audioOn ? 'ON' : 'OFF');
                this.updateAudioButton(audioOn);
            }
        });

        // R key to request new video session (for debugging)
        this.input.keyboard.on('keydown-R', () => {
            if (!this.videoSessionActive) {
                console.log('Requesting video session...');
                gameWebSocket.requestVideoSession();
            }
        });
    }

    update() {
        if (!this.player) return;
        let moved = false;
        let x = this.player.x;
        let y = this.player.y;
        let speed = 5;

        if (this.cursors.left.isDown)  { x -= speed; moved = true; }
        if (this.cursors.right.isDown) { x += speed; moved = true; }
        if (this.cursors.up.isDown)    { y -= speed; moved = true; }
        if (this.cursors.down.isDown)  { y += speed; moved = true; }

        if (moved && !this.movePending) {
            // Store previous position for potential revert
            this.prevPlayerX = this.player.x;
            this.prevPlayerY = this.player.y;
            this.movePending = true;

            // Move optimistically for smooth gameplay
            this.player.x = x;
            this.player.y = y;

            const playerState = {
                userName: this.username,
                x: x,
                y: y,
                avatarId: this.avatarId,
                roomId: this.roomId
            };

            console.log(`Sending player state:`, playerState);
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

const gameScene = new Phaser.Game(config);
export default gameScene;