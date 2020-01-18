const raspberryPiCamera = require('raspberry-pi-camera-native');
const WebSocketClient = require("websocket").client;
var fs = require("fs");

var ws = new WebSocketClient();

ws.on("connect", function(conn){
    raspberryPiCamera.on('frame', (data) => {
        ws.sendUTF(data);
    });
    
    raspberryPiCamera.start({
        width: 1280,
        height: 720,
        fps: 30,
        quality: 100,
        encoding: 'JPEG'
    });
});

ws.connect("ws://192.168.88.209:8001");
