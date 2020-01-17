const { StreamCamera, Codec } = require( "pi-camera-connect" );


const piCamStream = async () => {
    
    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG
    });

    await streamCamera.startCapture();

    const image = await streamCamera.takeImage();

    await streamCamera.stopCapture();

    console.log("IMAGE IS: " + image);
};

module.exports = {piCamStream};