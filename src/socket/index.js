var socket = require('socket.io-client');
var socket = io("local");

socket.connect();
socket.emit('init', true);

socket.on('init', (data) => {
    data && data[0] && data[1]? createMap(data[0], data[1]) : console.log("wrong map response");
})