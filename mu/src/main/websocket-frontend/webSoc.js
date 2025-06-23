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
                    console.log("true");
                    this.joinedPlayerState(joinedPlayer);
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
    sendPlayerPosition(position) {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.send("/app/move", {}, JSON.stringify(position))
        }
    }
}

const gameWebSocket = new GameWebSocket();

export default gameWebSocket;