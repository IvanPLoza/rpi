/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motorControll, testServo} = require("./src/gpioControlls/index.js");
require("./src/camera/index");

motorControll.stopAll();

setTimeout(function(){
    motorControll.goForward();
}, 1000);
setTimeout(function(){
    motorControll.goLeft();
}, 2000);
setTimeout(function(){
    motorControll.goForward();
}, 3000);
setTimeout(function(){
    motorControll.goRight();
}, 4000);

