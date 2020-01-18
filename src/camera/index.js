const { StreamCamera, Codec, StillCamera  } = require( "pi-camera-connect" );
const fs = require("fs");
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");
//var ImageParser = require("image-parser");
const stillCamera = new StillCamera();

const piCamStream = async () => {
    stillCamera.takeImage().then(image => {
        Jimp.read(image, function(err, img){
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
            qr.decode(image.bitmap);
        })
    });
};



piCamStream();