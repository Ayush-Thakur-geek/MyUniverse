class GameRTC {
    constructor() {
        this.cameraContainer = document.getElementById("camera-container");
        this.micContainer = document.getElementById("microphone-container");
        this.cameraIcon = document.createElement("i");
        this.micIcon = document.createElement("i");
        this.cameraIcon.className = "fa-solid fa-video";
        this.micIcon.className = "fa-solid fa-microphone";
        this.cameraIcon.style.color = "#d2d2ac";
        this.micIcon.style.color = "#d2d2ac";
        this.cameraOpen = true;
        this.micOpen = true;
        this.localStream = null;

        // Append icons once in constructor
        this.cameraContainer.appendChild(this.cameraIcon);
        this.micContainer.appendChild(this.micIcon);

        this.cameraIcon.style.cursor = "pointer";
        this.micIcon.style.cursor = "pointer";

        this.cameraIcon.addEventListener('click', () => this.toggleCamera());
        this.micIcon.addEventListener('click', () => this.toggleMic());
        //
        // this.cameraIcon.addEventListener('click', () => this.setReady(this.cameraOpen, this.micOpen));
        // this.micIcon.addEventListener('click', () => this.setReady(this.cameraOpen, this.micOpen));
    }

    async setReady(cameraOpen = true, micOpen = true) {
        try {
            // Stop existing stream if any
            if (this.localStream) {
                this.localStream.getTracks().forEach(track => track.stop());
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                video: cameraOpen,
                audio: micOpen
            });

            this.localStream = stream;
            // this.cameraOpen = cameraOpen;
            // this.micOpen = micOpen;
            //
            // // Update icons - show normal icon when open, slash when closed
            // if (cameraOpen) {
            //     console.log(`Camera open for ${cameraOpen}`);
            //     this.cameraOpen = false;
            //     this.cameraIcon.className = "fa-solid fa-video";
            // } else {
            //     console.log(`Camera closed for ${cameraOpen}`);
            //     this.cameraOpen = true;
            //     this.cameraIcon.className = "fa-solid fa-video-slash";
            // }
            //
            // if (micOpen) {
            //     console.log(`Mic open for ${micOpen}`);
            //     this.micOpen = false;
            //     this.micIcon.className = "fa-solid fa-microphone";
            // } else {
            //     console.log(`Mic open for ${micOpen}`);
            //     this.micOpen = true;
            //     this.micIcon.className = "fa-solid fa-microphone-slash";
            // }

            console.log(`Access granted:`, stream);
            return stream; // Return stream for use elsewhere

        } catch (err) {
            console.error(`Access denied:`, err);
            throw err; // Re-throw to handle in calling code
        }
    }

    // Add toggle methods
    toggleCamera() {
        if (this.localStream) {
            const videoTrack = this.localStream.getVideoTracks()[0];
            if (videoTrack) {
                this.cameraOpen = !this.cameraOpen;
                videoTrack.enabled = this.cameraOpen;
                this.cameraIcon.className = this.cameraOpen
                    ? "fa-solid fa-video"
                    : "fa-solid fa-video-slash";
            }

            console.log(`videoTrack: ${videoTrack}`);
        }
    }

    toggleMic() {
        if (this.localStream) {
            const audioTrack = this.localStream.getAudioTracks()[0];
            if (audioTrack) {
                this.micOpen = !this.micOpen;
                audioTrack.enabled = this.micOpen;
                this.micIcon.className = this.micOpen
                    ? "fa-solid fa-microphone"
                    : "fa-solid fa-microphone-slash";
            }
            console.log(`audioTrack: ${audioTrack}`);
        }
    }

    // Clean up method
    destroy() {
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => track.stop());
            this.localStream = null;
        }
    }
}

const gameRTC = new GameRTC();

document.addEventListener('DOMContentLoaded', () => {
    gameRTC.setReady();
})

export default gameRTC;