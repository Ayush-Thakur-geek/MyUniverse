import { Room, RoomEvent, Track } from 'livekit-client';

class PhaserVideoManager {
    constructor(gameScene) {
        this.gameScene = gameScene;
        this.room = null;
        this.localParticipant = null;
        this.remoteParticipants = new Map();
        this.proximityRadius = 60;
        this.localUserId = null;
        this.videoElements = new Map();
        this.audioElements = new Map(); // Track audio elements for cleanup
        this.subscribedTracks = new Map();
        this.pendingProximityUsers = new Set(); // Handle race conditions
    }

    async initializeSession(roomId, token, userId) {
        this.localUserId = userId;

        try {
            // Create LiveKit room with simpler configuration
            this.room = new Room({
                adaptiveStream: true,
                dynacast: true,
                videoCaptureDefaults: {
                    resolution: {
                        width: 320,
                        height: 240,
                        frameRate: 15
                    }
                },
                audioCaptureDefaults: {
                    autoGainControl: true,
                    echoCancellation: true,
                    noiseSuppression: true
                }
            });

            // Set up event handlers BEFORE connecting
            this.setupEventHandlers();

            // Subscribe to proximity updates from backend
            this.subscribeToProximityUpdates(roomId);

            // Connect to room
            await this.room.connect('ws://localhost:7880', token);
            console.log('Connected to LiveKit room:', this.room.name);

            // Process already-connected participants
            this.processExistingParticipants();

            // Enable camera and microphone
            try {
                await this.room.localParticipant.enableCameraAndMicrophone();
                console.log('Camera and microphone enabled');
            } catch (mediaError) {
                console.error('Error accessing camera/microphone:', mediaError);
                // Continue even if camera/mic fails - user might just want to watch
            }

            return true;

        } catch (error) {
            console.error('Error connecting to room:', error);
            return false;
        }
    }

    setupEventHandlers() {
        // Handle participant connected
        this.room.on(RoomEvent.ParticipantConnected, (participant) => {
            console.log('Participant connected:', participant.identity);
            console.log(`prev size of remoteParticipants: ${this.remoteParticipants.size}`);
            this.remoteParticipants.set(participant.identity, participant);
            console.log(`new size of remoteParticipants: ${this.remoteParticipants.size}`);
        });

        // Handle participant disconnected
        this.room.on(RoomEvent.ParticipantDisconnected, (participant) => {
            console.log('Participant disconnected:', participant.identity);
            this.remoteParticipants.delete(participant.identity);
            this.removeVideoElement(participant.identity);
            this.removeAudioElement(participant.identity);
            this.subscribedTracks.delete(participant.identity);
            this.pendingProximityUsers.delete(participant.identity);
        });

        // Handle track subscribed
        this.room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
            console.log(`Track subscribed: ${track.kind} from ${participant.identity}`);

            if (track.kind === Track.Kind.Video) {
                // Check if backend already told us this user is in proximity OR currently in proximity
                if (this.isUserInProximity(participant.identity) ||
                    this.pendingProximityUsers.has(participant.identity)) {
                    this.attachVideoTrack(track, participant.identity);
                    this.pendingProximityUsers.delete(participant.identity);
                }
            }
            // Always attach audio regardless of proximity
            else if (track.kind === Track.Kind.Audio) {
                this.attachAudioTrack(track, participant.identity);
            }
        });

        // Handle track unsubscribed
        this.room.on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
            console.log(`Track unsubscribed: ${track.kind} from ${participant.identity}`);
            if (track.detach) {
                track.detach();
            }
        });

        // Handle local track published - create local video AFTER tracks are published
        this.room.on(RoomEvent.LocalTrackPublished, (publication, participant) => {
            console.log(`Local track published: ${publication.kind}`);
            if (publication.kind === Track.Kind.Video) {
                this.createLocalVideoElement();
            }
        });

        // Handle disconnected
        this.room.on(RoomEvent.Disconnected, (reason) => {
            console.log('Disconnected from room:', reason);
            this.cleanup();
        });

        // Handle reconnecting
        this.room.on(RoomEvent.Reconnecting, () => {
            console.log('Reconnecting to room...');
        });

        // Handle reconnected
        this.room.on(RoomEvent.Reconnected, () => {
            console.log('Reconnected to room');
        });
    }

    createLocalVideoElement() {
        // Get local video track publication
        const localVideoTrackPublication = this.room.localParticipant.videoTrackPublications.values().next().value;

        if (!localVideoTrackPublication || !localVideoTrackPublication.track) {
            console.warn('No local video track found');
            return;
        }

        // Remove existing local video container if it exists
        let existingContainer = document.getElementById('local-video-container');
        if (existingContainer) {
            existingContainer.remove();
        }

        // Create new container
        const container = document.createElement('div');
        container.id = 'local-video-container';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 160px;
            height: 120px;
            border: 3px solid #4ecdc4;
            border-radius: 8px;
            overflow: hidden;
            z-index: 1001;
            background: #000;
        `;

        // Add "You" label
        const label = document.createElement('div');
        label.textContent = 'You (' + this.localUserId + ')';
        label.style.cssText = `
            position: absolute;
            bottom: 5px;
            left: 5px;
            color: white;
            font-size: 12px;
            background: rgba(0,0,0,0.8);
            padding: 2px 8px;
            border-radius: 3px;
            font-weight: bold;
            z-index: 10;
        `;
        container.appendChild(label);

        // Attach video track
        const videoElement = localVideoTrackPublication.track.attach();
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        videoElement.style.objectFit = 'cover';
        container.insertBefore(videoElement, container.firstChild);

        document.body.appendChild(container);
        console.log('Local video element created');
    }

    processExistingParticipants() {
        console.log('Processing existing participants in room');

        // Add all existing remote participants to our map
        this.room.remoteParticipants.forEach((participant, identity) => {
            console.log('Found existing participant:', identity);
            console.log(`prev size of remoteParticipants: ${this.remoteParticipants.size}`);
            this.remoteParticipants.set(identity, participant);
            console.log(`new size of remoteParticipants: ${this.remoteParticipants.size}`);

            // Process their already-published tracks
            this.processParticipantTracks(participant);
        });
    }

    processParticipantTracks(participant) {
        // Process video tracks
        participant.videoTrackPublications.forEach((publication) => {
            if (publication.isSubscribed && publication.track) {
                console.log(`Processing existing video track for ${participant.identity}`);
                if (this.isUserInProximity(participant.identity) ||
                    this.pendingProximityUsers.has(participant.identity)) {
                    this.attachVideoTrack(publication.track, participant.identity);
                    this.pendingProximityUsers.delete(participant.identity);
                }
            }
        });

        // Process audio tracks
        participant.audioTrackPublications.forEach((publication) => {
            if (publication.isSubscribed && publication.track) {
                console.log(`Processing existing audio track for ${participant.identity}`);
                this.attachAudioTrack(publication.track, participant.identity);
            }
        });
    }

    attachVideoTrack(track, userId) {
        try {
            // Remove existing video if any
            this.removeVideoElement(userId);

            const playerCircle = this.gameScene.remotePlayers.get(userId);
            if (!playerCircle) {
                console.warn('Player circle not found for:', userId);
                return;
            }

            // Create video container
            const videoContainer = document.createElement('div');
            videoContainer.id = `video-${userId}`;
            videoContainer.style.cssText = `
                position: absolute;
                width: 120px;
                height: 90px;
                border: 2px solid #4ecdc4;
                border-radius: 8px;
                overflow: hidden;
                z-index: 1000;
                background: #000;
                pointer-events: none;
            `;

            // Get game container
            const gameContainer = document.getElementById('game-container');
            if (!gameContainer) {
                console.error('Game container not found');
                return;
            }

            // Convert Phaser world coordinates to screen coordinates
            const camera = this.gameScene.cameras.main;
            const screenX = (playerCircle.x - camera.scrollX) * camera.zoom;
            const screenY = (playerCircle.y - camera.scrollY) * camera.zoom;

            videoContainer.style.left = `${screenX - 60}px`;
            videoContainer.style.top = `${screenY - 120}px`;

            // Add username label
            const label = document.createElement('div');
            label.textContent = userId;
            label.style.cssText = `
                position: absolute;
                bottom: 5px;
                left: 5px;
                color: white;
                font-size: 11px;
                background: rgba(0,0,0,0.8);
                padding: 2px 5px;
                border-radius: 3px;
                font-weight: bold;
                z-index: 10;
            `;
            videoContainer.appendChild(label);

            // Attach video track
            const videoElement = track.attach();
            videoElement.style.width = '100%';
            videoElement.style.height = '100%';
            videoElement.style.objectFit = 'cover';
            videoContainer.insertBefore(videoElement, videoContainer.firstChild);

            gameContainer.appendChild(videoContainer);
            this.videoElements.set(userId, videoContainer);
            this.subscribedTracks.set(userId, true);

            console.log('Video element created for:', userId);
        } catch (error) {
            console.error(`Error attaching video for ${userId}:`, error);
        }
    }

    attachAudioTrack(track, userId) {
        try {
            // Remove existing audio if any
            this.removeAudioElement(userId);

            // Audio elements don't need to be visible
            const audioElement = track.attach();
            audioElement.style.display = 'none';
            document.body.appendChild(audioElement);
            this.audioElements.set(userId, audioElement);
            console.log('Audio track attached for:', userId);
        } catch (error) {
            console.error(`Error attaching audio for ${userId}:`, error);
        }
    }

    isUserInProximity(userId) {
        const localPlayer = this.gameScene.player;
        const remotePlayer = this.gameScene.remotePlayers.get(userId);

        if (!localPlayer || !remotePlayer) {
            return false;
        }

        const distance = Phaser.Math.Distance.Between(
            localPlayer.x, localPlayer.y,
            remotePlayer.x, remotePlayer.y
        );

        return distance <= this.proximityRadius;
    }

    handleUsersEnterProximity(userIds) {
        userIds.forEach(userId => {
            console.log(`${this.localUserId} ------ ${userId}`);
            if (userId !== this.localUserId) {
                console.log('User enter proximity:', userId);
                if (this.subscribedTracks.has(userId)) {
                    return; // Already showing video
                }

                const participant = this.remoteParticipants.get(userId);
                console.log(`checking for availability ${participant.identity}`);
                if (participant) {
                    // Find video track
                    console.log(`Hooray ${participant.identity}`);
                    const videoTrackPub = Array.from(participant.videoTrackPublications.values())[0];
                    if (videoTrackPub && videoTrackPub.track) {
                        this.attachVideoTrack(videoTrackPub.track, userId);
                    } else {
                        // Track not ready yet - mark for later when TrackSubscribed fires
                        this.pendingProximityUsers.add(userId);
                        console.log(`Video track not ready for ${userId}, marked as pending`);
                    }
                } else {
                    // Participant not connected yet - mark for later
                    this.pendingProximityUsers.add(userId);
                    console.log(`Participant ${userId} not connected yet, marked as pending`);
                }
            }

        });
    }

    handleUsersLeaveProximity(userIds) {
        userIds.forEach(userId => {
            this.removeVideoElement(userId);
            this.subscribedTracks.delete(userId);
            this.pendingProximityUsers.delete(userId);
        });
    }

    removeVideoElement(userId) {
        const element = this.videoElements.get(userId);
        if (element) {
            // Properly detach media elements before removing
            const mediaElements = element.querySelectorAll('video');
            mediaElements.forEach(el => {
                el.srcObject = null;
            });
            element.remove();
            this.videoElements.delete(userId);
            console.log('Video element removed for:', userId);
        }
    }

    removeAudioElement(userId) {
        const element = this.audioElements.get(userId);
        if (element) {
            element.srcObject = null;
            element.remove();
            this.audioElements.delete(userId);
            console.log('Audio element removed for:', userId);
        }
    }

    toggleVideo() {
        const localVideoPub = Array.from(this.room.localParticipant.videoTrackPublications.values())[0];
        if (localVideoPub) {
            const enabled = localVideoPub.isMuted;
            if (enabled) {
                localVideoPub.unmute();
            } else {
                localVideoPub.mute();
            }
            console.log('Video toggled:', enabled ? 'ON' : 'OFF');
            return enabled;
        }
        return false;
    }

    toggleAudio() {
        const localAudioPub = Array.from(this.room.localParticipant.audioTrackPublications.values())[0];
        if (localAudioPub) {
            const enabled = localAudioPub.isMuted;
            if (enabled) {
                localAudioPub.unmute();
            } else {
                localAudioPub.mute();
            }
            console.log('Audio toggled:', enabled ? 'ON' : 'OFF');
            return enabled;
        }
        return false;
    }

    updateVideoElementPosition(userId) {
        const playerCircle = this.gameScene.remotePlayers.get(userId);
        const videoElement = this.videoElements.get(userId);

        if (playerCircle && videoElement) {
            // Convert Phaser world coordinates to screen coordinates
            const camera = this.gameScene.cameras.main;
            const screenX = (playerCircle.x - camera.scrollX) * camera.zoom;
            const screenY = (playerCircle.y - camera.scrollY) * camera.zoom;

            videoElement.style.left = `${screenX - 60}px`;
            videoElement.style.top = `${screenY - 120}px`;
        }
    }

    updateAllVideoPositions() {
        this.videoElements.forEach((element, userId) => {
            this.updateVideoElementPosition(userId);
        });
    }

    cleanup() {
        // Unsubscribe from proximity updates
        if (this.proximitySubscription) {
            this.proximitySubscription.unsubscribe();
            this.proximitySubscription = null;
        }

        // Remove all video elements with proper cleanup
        this.videoElements.forEach(element => {
            const mediaElements = element.querySelectorAll('video');
            mediaElements.forEach(el => el.srcObject = null);
            element.remove();
        });
        this.videoElements.clear();

        // Remove all audio elements with proper cleanup
        this.audioElements.forEach(element => {
            element.srcObject = null;
            element.remove();
        });
        this.audioElements.clear();

        this.subscribedTracks.clear();
        this.pendingProximityUsers.clear();

        // Remove local video
        const localVideo = document.getElementById('local-video-container');
        if (localVideo) {
            const mediaElements = localVideo.querySelectorAll('video');
            mediaElements.forEach(el => el.srcObject = null);
            localVideo.remove();
        }
    }

    async disconnect() {
        if (this.room) {
            await this.room.disconnect();
        }
        this.cleanup();
    }

    // Get list of connected users
    getConnectedUsers() {
        return Array.from(this.remoteParticipants.keys());
    }

    // Check if we have an active connection
    isConnected() {
        return this.room && this.room.state === 'connected';
    }

    // Subscribe to proximity updates from backend via WebSocket
    subscribeToProximityUpdates(roomId) {
        if (!this.stompClient) {
            console.warn('No STOMP client provided, proximity updates will not work');
            return;
        }

        const subscription = this.stompClient.subscribe(
            `/user/queue/${roomId}/video-proximity`,
            (message) => {
                try {
                    const update = JSON.parse(message.body);
                    this.handleProximityUpdate(update);
                } catch (error) {
                    console.error('Error parsing proximity update:', error);
                }
            }
        );

        this.proximitySubscription = subscription;
        console.log('Subscribed to proximity updates for room:', roomId);
    }

    // Handle proximity updates from backend
    handleProximityUpdate(update) {
        console.log('Received proximity update:', update);

        // Handle the moving user's update (has newProximityPlayers/leavingPlayers)
        if (update.newProximityPlayers !== undefined) {
            const entering = Array.isArray(update.newProximityPlayers)
                ? update.newProximityPlayers
                : Array.from(update.newProximityPlayers);
            const leaving = Array.isArray(update.leavingPlayers)
                ? update.leavingPlayers
                : Array.from(update.leavingPlayers);

            if (entering.length > 0) {
                console.log('Users entering proximity:', entering);
                this.handleUsersEnterProximity(entering);
            }

            if (leaving.length > 0) {
                console.log('Users leaving proximity:', leaving);
                this.handleUsersLeaveProximity(leaving);
            }
        }
        // Handle reverse updates (has enteringUsers/leavingUsers)
        else if (update.enteringUsers !== undefined) {
            const entering = Array.isArray(update.enteringUsers)
                ? update.enteringUsers
                : Array.from(update.enteringUsers);
            const leaving = Array.isArray(update.leavingUsers)
                ? update.leavingUsers
                : Array.from(update.leavingUsers);

            if (entering.length > 0) {
                console.log('Users entering proximity (reverse):', entering);
                this.handleUsersEnterProximity(entering);
            }

            if (leaving.length > 0) {
                console.log('Users leaving proximity (reverse):', leaving);
                this.handleUsersLeaveProximity(leaving);
            }
        }
    }
}

export default PhaserVideoManager;