const raspberryPiCamera = require('raspberry-pi-camera-native');
var QrCode = require("qrcode-reader");
var Jimp = require("jimp");

raspberryPiCamera.on('frame', (data) => {
    console.log(data);

});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 30,
    quality: 80,
    encoding: 'JPEG'
});
