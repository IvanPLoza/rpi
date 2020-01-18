const raspberryPiCamera = require('raspberry-pi-camera-native');
var QrCode = require("qrcode-reader");
var Jimp = require("jimp");

var buffers = Jimp.read(buffers, function(err, img){
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

raspberryPiCamera.on('frame', (data) => {
    console.log(data);
    data.pipe(buffers);
});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 30,
    quality: 80,
    encoding: 'JPEG'
});
