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
}

const gameWebSocket = new GameWebSocket();

export default gameWebSocket;