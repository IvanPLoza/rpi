const { StreamCamera, Codec, SensorMode  } = require( "pi-camera-connect" );
const fs = require("fs");
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");
//var ImageParser = require("image-parser");

const piCamStream = async () => {
    

    const streamCamera = new StreamCamera({
        codec: Codec.MJPEG
    });
 
    const videoStream = streamCamera.createStream();
 
    const writeStream = fs.createWriteStream("video-stream.mjpeg");
 
    // Pipe the video stream to our video file
    videoStream.pipe(writeStream);
 
    await streamCamera.startCapture();
 
    // We can also listen to data events as they arrive
    videoStream.on("data", (data) => {
        console.log("New data", data);  
        const img = streamCamera.takeImage(); 
        fs.writeFileSync("still-image.jpg", img);
        var buffer = fs.readFileSync("still-image.jpg");
        Jimp.read(img, function(err, image){
            if (err) {
                console.error(err);
                // TODO handle error
            } else {
               await new Promise((resolve) => {

                    var qr = new QrCode();
                    qr.callback = function(err, value) {
                        if (err) {
                            console.error(err);
                            // TODO handle error
                        }
                        console.log(value.result);
                        console.log(value);
                        resolve();
                    };
                    qr.decode(image.bitmap);
                });
            }
        })
    });
    
    videoStream.on("end", data => console.log("Video stream has ended"));
 
    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(() => resolve(), 5000));
 
    await streamCamera.stopCapture();
    
};



piCamStream();