const { StreamCamera, Codec, StillCamera  } = require( "pi-camera-connect" );
const fs = require("fs");
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");
//var ImageParser = require("image-parser");
const stillCamera = new StillCamera();

const piCamStream = async () => {
    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG
    });
 
    await streamCamera.startCapture();
 
    const image = await streamCamera.takeImage();
    fs.writeFileSync(__dirname + "/image.jpg", image);
    // Process image...
 
    await streamCamera.stopCapture();
    
};



piCamStream();