import SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs";

class GameWebSocket {
    constructor() {
        this.stompClient = null;
        this.onPlayerPositionUpdate = null;
        this.onPlayerJoining = null;
    }

    connect() {
        const socket = new SockJS('/game-ws');
        this.stompClient = Stomp.over(socket);

        this.stompClient.connect({}, (frame) => {
            console.log("Connected!");

            this.stompClient.subscribe('/topic/position', (message) => {
                const position = JSON.parse(message.body);
                if (this.onPlayerPositionUpdate) {
                    this.onPlayerPositionUpdate(position);
                }
            });

            this.stompClient.subscribe('/topic/player-joined', (message) => {
                const newPlayer = JSON.parse(message.body);
                if (this.onPlayerJoining) {
                    this.onPlayerJoining(newPlayer);
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