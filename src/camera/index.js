import { StreamCamera, Codec } from "pi-camera-connect";

const piCamStream = async () => {
    
    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG
    });

    await streamCamera.startCapture();

    const image = await streamCamera.takeImage();

    // Process image...

    await streamCamera.stopCapture();
};

module.exports = {piCamStream};