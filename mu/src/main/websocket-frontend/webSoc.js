import SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs";

class GameWebSocket {
    constructor() {
        this.stompClient = null;
    }

    connect() {
        const socket = new SockJS('/game-ws');
        this.stompClient = Stomp.over(socket);

        this.stompClient.connect({}, (frame) => {
            console.log("Connected: ", frame);

            this.stompClient.subscribe('/topic/player-joined', (message) => {
                console.log("player-joined endpoint")
                const joinedPlayer = JSON.parse(message.body);
                if (this.joinedPlayerState) {
                    this.joinedPlayerState(joinedPlayer);
                }
            });

            this.stompClient.subscribe('/topic/position', (message) => {
                console.log("Movement suspected");
                const playerMoved = JSON.parse(message.body);
                if (this.playerMovedState) {
                    console.log("true");
                    this.playerMovedState(playerMoved);
                } else {
                    console.log("false");
                }
            });

            this.stompClient.subscribe('/app/initial', (message) => {
                const initialPlayers = JSON.parse(message.body);
                if (this.initialPlayerState) {
                    this.initialPlayerState(initialPlayers);
                }
            });
        });
    }
    sendPlayerPosition(playerState) {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.send("/app/move", {}, JSON.stringify(playerState))
        }
    }
}

const gameWebSocket = new GameWebSocket();

export default gameWebSocket;