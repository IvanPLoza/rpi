const raspberryPiCamera = require('raspberry-pi-camera-native');
var QrCode = require("qrcode-reader");
var Jimp = require("jimp");
var fs = require("fs");

raspberryPiCamera.on('frame', (data) => {
    console.log(data);
    Jimp.read(data, function(err, img){
       
        var qr = new QrCode();
        qr.callback = function(err, value) {
            
            console.log(value.result);
            console.log(value);
        };
        qr.decode(img.bitmap);
    });;
});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 30,
    quality: 80,
    encoding: 'JPEG'
});
