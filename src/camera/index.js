const { StreamCamera, Codec } = require( "pi-camera-connect" );
const fs = require("fs");
var QrCode = require('qrcode-reader');
//var ImageParser = require("image-parser");

//Construct qr code class
var qr = new QrCode();

const piCamStream = async () => {

    const streamCamera = new StreamCamera({
        codec: Codec.H264
    });

    const videoStream = streamCamera.createStream();

    const writeStream = fs.createWriteStream("video-stream.h264");

    // Pipe the video stream to our video file
    videoStream.pipe(writeStream);

    await streamCamera.startCapture();

    // We can also listen to data events as they arrive
    videoStream.on("data", (data) => {
        console.log(data);
        
        //var img = new ImageParser(data);

        //img.parse(function(err) {


            var qr = new QrCode();

            qr.callback = function(err, value) {
                if (err) {
                    console.error(err);
                    // TODO handle error
                }
                console.log(value.result);
                console.log(value);
            };
            qr.decode({width: 1920, height: 1080}, data);
       // });
        
    });
    videoStream.on("end", data => console.log("Video stream has ended"));

    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(() => resolve(), 5000));

    await streamCamera.stopCapture();
};



piCamStream();