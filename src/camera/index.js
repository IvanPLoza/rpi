const raspberryPiCamera = require('raspberry-pi-camera-native');
var QrCode = require("qrcode-reader");
var Jimp = require("jimp");
var fs = require("fs");

raspberryPiCamera.on('frame', (data) => {
    fs.writeFileSync("test.jpeg", data);
});

fs.watch("test.jpeg", function(curr, prev){
    Jimp.read(curr, function(err, img){
        if (err) {
            console.error(err);
            // TODO handle error
        }
        var qr = new QrCode();
        qr.callback = function(err, value) {
            if (err) {
                console.error(err);
                // TODO handle error
            }
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
