var socket = require('socket.io-client');
var socket = io("http://on-time.cc:8001");

socket.connect();
socket.emit('init', true);
var map;

socket.on('init', (data) => {
    data && data[0] && data[1]? map = mapping(data[0], data[1]) : console.log("wrong map response");
})

socket.on("order", (data) =>{
    console.log("Putanja za narudzbu: ", order(map, data[0], data[1]))
});