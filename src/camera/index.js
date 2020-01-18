const raspberryPiCamera = require('raspberry-pi-camera-native');
var QrCode = require("qrcode-reader");
var Jimp = require("jimp");

var buffers = [];

raspberryPiCamera.on('frame', (data) => {
    //console.log(data);
    data.pipe(buffers);
});

buffers.on('change', function(err, val) {
    console.log("here");
});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 30,
    quality: 80,
    encoding: 'JPEG'
});
