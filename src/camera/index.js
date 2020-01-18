const raspberryPiCamera = require('raspberry-pi-camera-native');
const QRCode = require("qrcode-reader");
const Jimp = require("jimp");
var fs = require("fs");

async function readQR(data){
    const img = await Jimp.read(data);
    const qr = new QRCode();
    const value = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
        qr.decode(img.bitmap);
    });
    console.log(value.result);
}

raspberryPiCamera.on('frame', (data) => {
    readQR(data).catch((err) => {});
});

raspberryPiCamera.start({
    width: 720,
    height: 480,
    fps: 30,
    quality: 70,
    encoding: 'JPEG'
});
