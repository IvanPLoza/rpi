const { StreamCamera, Codec, SensorMode  } = require( "pi-camera-connect" );
const fs = require("fs");
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");
//var ImageParser = require("image-parser");

const piCamStream = async () => {
    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG,
        sensorMode: SensorMode.Mode6
    });
 
     streamCamera.startCapture();
 
    const image = await streamCamera.takeImage();
    fs.writeFileSync("image.jpg", image);
    // Process image...
 
    streamCamera.stopCapture();
    
};



piCamStream();