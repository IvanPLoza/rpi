const raspberryPiCamera = require('raspberry-pi-camera-native');
const QRCode = require("qrcode-reader");
const Jimp = require("jimp");
var fs = require("fs");

async function readQR(data){
    const img = await new Promise((resolve) => {
        Jimp.read(data).then((image) => {
            image.grayscale();
            image.write("test.jpeg");
            resolve(image);
        });
    })
    const qr = new QRCode();
    const value = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
        qr.decode(img.bitmap);
    });
    console.log(value);
}

raspberryPiCamera.on('frame', (data) => {
    //fs.writeFileSync("test.jpeg", data);
    readQR(data);
});

raspberryPiCamera.start({
    width: 720,
    height: 480,
    fps: 30,
    quality: 50,
    encoding: 'JPEG'
});
