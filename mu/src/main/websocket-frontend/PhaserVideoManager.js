class PhaserVideoManager {
    constructor(gameScene) {
        this.gameScene = gameScene;
        this.session = null;
        this.publisher = null;
        this.subscribers = new Map();
        this.userPositions = new Map();
        this.proximityRadius = 60;
        this.localUserId = null;
        this.videoElements = new Map();
    }

    async initialize(sessionId, token, userId) {
        this.localUserId = userId;

        try {
            this.session = new OpenVidu().initSession();

            this.setupEventHandlers();

            await this.session.connect(token, {
                userId: userId,
                roomId: this.gameScene.roomId
            });

            await this.publishStream();

            console.log('Video session initialized successfully');
            return true;
        } catch (error) {
            console.error('Error initializing video session: ', error);
            return false;
        }
    }

    setupEventHandlers() {
        // When a new user joins and starts publishing
        this.session.on('streamCreated', (event) => {
            console.log(`New stream created: ${event.stream.connection.data}`);
        });

        this.session.on('streamDestroyed', (event) => {
            console.log(`Stream destroyed: ${event.stream.connection.data}`);
            const userData = JSON.parse(event.stream.connection.data);
            this.unsubscribeFromUser(userData.userId);
        });

        this.session.on('connectionCreated', (event) => {
            console.log(`User connected: ${event.connection.data}`);
        });

        this.session.on('connectionDestroyed', (event) => {
            console.log('User disconnected:', event.connection.data);
            const userData = JSON.parse(event.connection.data);
            this.removeUser(userData.userId);
        });

        this.session.on('exception', (event) => {
            console.error('OpenVidu exception:', event);
        });
    }

    async publishStream() {
        try {
            this.publisher = await OpenVidu().getUserMedia({
                videoSource: undefined,
                audioSource: undefined,
                resolution: '1280x720',
                frameRate: 15
            });

            this.publisher = this.session.publish(this.publisher);

            this.createLocalVideoElement();
        } catch (error) {
            console.error('Error in publishStream: ', error);
        }
    }

    createLocalVideoElement() {
        const localVideoContainer = document.getElementById('local-video-container');
        if (localVideoContainer && this.publisher) {
            this.publisher.addVideoElement(localVideoContainer);
            console.log('Local Video element created');
        }
    }

    handleUsersEnterProximity(userIds) {
        userIds.forEach(userId => {
            const stream = this.findStreamByUserId(userId);
            if (stream && !this.subscribers.has(userId)) {
                console.log(`Subscribing to user in proximity: ${userId}`);
                this.subscribeToStream(stream, userId);
            }
        });
    }

    handleUsersLeaveProximity(userIds) {
        userIds.forEach(userId => {
            this.unsubscibeFromUser(userId);
        });
    }

    subscribeToStream(stream, userId) {
        try {
            const subscriber = this.session.subscribe(stream);
            this.subscribers.set(userId, subscriber);

            this.createRemoteVideoElement(userId, subscriber);

            console.log(`Subscribing to stream: ${stream}, userId: ${userId}`);
        } catch (error) {
            console.error('Error subscribing to stream: ' + error);
        }
    }

    unsubscribeFromUser(userId) {
        if (this.subscribers.has(userId)) {
            console.log('Unsubscribing from user leaving proximity:', userId);
            const subscriber = this.subscribers.get(userId);
            this.session.unsubscribe(subscriber);
            this.subscribers.delete(userId);
            this.removeVideoElement(userId);
        }
    }

    createRemoteVideoElement(userId, subscriber) {
        // Get player position from the game scene
        const playerCircle = this.gameScene.remotePlayers.get(userId);
        if (!playerCircle) {
            console.warn('Player circle not found for user:', userId);
            return;
        }

        // Create video container
        const videoContainer = document.createElement('div');
        videoContainer.id = `video-${userId}`;
        videoContainer.className = 'remote-video-container';
        videoContainer.style.position = 'absolute';
        videoContainer.style.width = '120px';
        videoContainer.style.height = '90px';
        videoContainer.style.border = '2px solid #00ff00';
        videoContainer.style.borderRadius = '8px';
        videoContainer.style.overflow = 'hidden';
        videoContainer.style.zIndex = '1000';
        videoContainer.style.pointerEvents = 'none';

        // Position near the player's game position
        const gameContainer = document.getElementById('game-container');
        const gameRect = gameContainer.getBoundingClientRect();

        // Position video above the player circle
        videoContainer.style.left = `${playerCircle.x - 60}px`;
        videoContainer.style.top = `${playerCircle.y - 120}px`;

        // Add username label
        const nameLabel = document.createElement('div');
        nameLabel.className = 'username-label';
        nameLabel.textContent = userId;
        nameLabel.style.position = 'absolute';
        nameLabel.style.bottom = '5px';
        nameLabel.style.left = '5px';
        nameLabel.style.color = 'white';
        nameLabel.style.fontSize = '11px';
        nameLabel.style.backgroundColor = 'rgba(0,0,0,0.8)';
        nameLabel.style.padding = '2px 5px';
        nameLabel.style.borderRadius = '3px';
        nameLabel.style.fontWeight = 'bold';

        videoContainer.appendChild(nameLabel);

        // Add to game container
        gameContainer.appendChild(videoContainer);

        // Attach subscriber video
        subscriber.addVideoElement(videoContainer);

        // Store reference
        this.videoElements.set(userId, videoContainer);
    }

    removeVideoElement(userId) {
        const videoElement = this.videoElements.get(userId);
        if (videoElement) {
            videoElement.remove();
            this.videoElements.delete(userId);
        }
    }

    updateVideoElementPosition(userId) {
        const playerCircle = this.gameScene.remotePlayers.get(userId);
        const videoElement = this.videoElements.get(userId);

        if (playerCircle && videoElement) {
            videoElement.style.left = `${playerCircle.x - 60}px`;
            videoElement.style.top = `${playerCircle.y - 120}px`;
        }
    }

    findStreamByUserId(userId) {
        if (!this.session || !this.session.remoteConnections) {
            return null;
        }

        const connections = this.session.remoteConnections;
        for (let connectionId in connections) {
            const connection = connections[connectionId];
            try {
                const userData = JSON.parse(connection.data);
                if (userData.userId === userId && connection.streamManagers.length > 0) {
                    return connection.streamManagers[0].stream;
                }
            } catch (e) {
                console.warn('Error parsing connection data:', e);
            }
        }
        return null;
    }

    removeUser(userId) {
        this.unsubscribeFromUser(userId);
        this.userPositions.delete(userId);
    }

    toggleVideo() {
        if (this.publisher) {
            this.publisher.publishVideo();
            return this.publisher.videoActive;
        }
        return false;
    }

    toggleAudio() {
        if (this.publisher) {
            this.publisher.publishAudio(!this.publisher.audioActive);
            return this.publisher.audioActive;
        }
        return false;
    }

    // Clean up when leaving
    async disconnect() {
        if (this.session) {
            await this.session.disconnect();
        }

        // Remove all video elements
        this.videoElements.forEach((element) => {
            element.remove();
        });

        this.subscribers.clear();
        this.videoElements.clear();
        this.userPositions.clear();
    }

    // Get list of users with active video connections
    getConnectedUsers() {
        return Array.from(this.subscribers.keys());
    }

    // Update all video element positions (call this when players move)
    updateAllVideoPositions() {
        this.videoElements.forEach((videoElement, userId) => {
            this.updateVideoElementPosition(userId);
        });
    }
}

export default PhaserVideoManager;