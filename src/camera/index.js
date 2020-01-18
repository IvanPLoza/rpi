const raspberryPiCamera = require('raspberry-pi-camera-native');
var qrdecoder = require("./noe-zxing");
var Jimp = require("jimp");
var fs = require("fs");

raspberryPiCamera.on('frame', (data) => {
    fs.writeFileSync("test.jpeg", data);
});

fs.watch("test.jpeg", function(curr, prev){
    qrdecoder.decode("test.jpeg", (err, out) => {
        if(err){
            console.log(err);
        }
        console.log(out);
    })
});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 30,
    quality: 100,
    encoding: 'JPEG'
});
