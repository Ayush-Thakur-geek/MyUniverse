
class GameRTC {

    async setReady() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });

            console.log(`Access granted: ${stream}`);
        } catch (err) {
            console.error(`Access denied: ${err}`);
        }
    }
}

const gameRTC = new GameRTC();

export default gameRTC;