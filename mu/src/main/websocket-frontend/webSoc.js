import SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs";

const pathParts = window.location.pathname.split('/');
const roomId = pathParts[pathParts.length - 1];
console.log(`room id of this particular room: ${roomId}`);

class GameWebSocket {

    constructor() {
        this.stompClient = null;
        this.roomId = roomId;
    }

    connect() {
        const socket = new SockJS('/game-ws');
        this.stompClient = Stomp.over(socket);

        this.stompClient.connect({}, (frame) => {
            console.log("Connected: ", frame);

            this.stompClient.subscribe(`/topic/${this.roomId}/player-joined`, (message) => {
                console.log("player-joined endpoint")
                const joinedPlayer = JSON.parse(message.body);
                this.stompClient.send(`/app/${this.roomId}/join`, {}, JSON.stringify(joinedPlayer));
                if (this.joinedPlayerState) {
                    this.joinedPlayerState(joinedPlayer);
                }
            });

            this.stompClient.subscribe(`/topic/${this.roomId}/canMove`, (message) => {
                const reply = JSON.parse(message.body);
                console.log("canMove", reply);
                if (this.onCanMove) {
                    this.onCanMove(reply);
                }
            });

            this.stompClient.subscribe(`/topic/${roomId}/position`, (message) => {
                console.log("Movement suspected");
                const playerMoved = JSON.parse(message.body);
                if (this.playerMovedState) {
                    console.log("true");
                    this.playerMovedState(playerMoved);
                } else {
                    console.log("false");
                }
            });

            // New video-related subscriptions
            this.stompClient.subscribe(`/user/queue/${this.roomId}/video-session`, (message) => {
                const videoSessionData = JSON.parse(message.body);
                console.log("Video session data received:", videoSessionData);
                if (this.onVideoSession) {
                    this.onVideoSession(videoSessionData);
                }
            });

            this.stompClient.subscribe(`/user/queue/${this.roomId}/video-proximity`, (message) => {
                const proximityUpdate = JSON.parse(message.body);
                console.log("Video proximity update:", proximityUpdate);
                if (this.onVideoProximityUpdate) {
                    this.onVideoProximityUpdate(proximityUpdate);
                }
            });

            this.stompClient.subscribe(`/topic/${this.roomId}/player-left`, (message) => {
                const leftPlayer = JSON.parse(message.body);
                console.log("Player left:", leftPlayer);
                if (this.onPlayerLeft) {
                    this.onPlayerLeft(leftPlayer);
                }
            });

            this.stompClient.subscribe(`/app/${roomId}/initial`, (message) => {
                const initialPlayers = JSON.parse(message.body);
                if (this.initialPlayerState) {
                    this.initialPlayerState(initialPlayers);
                }
            });
        });
    }
    sendPlayerPosition(playerState) {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.send(`/app/${this.roomId}/move`, {}, JSON.stringify(playerState))
        }
    }

    requestVideoSession() {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.send(`/app/${this.roomId}/request-video-session`, {}, JSON.stringify({}));
        }
    }

    setVideoManager(videoManager) {
        this.videoManager = videoManager;
    }

    setCurrentUser(username) {
        this.currentUser = username;
    }

    disconnect() {
        if (this.stompClient) {
            this.stompClient.disconnect();
        }
    }
}

const gameWebSocket = new GameWebSocket();

export default gameWebSocket;