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
    motorControll.goForward(100);
}, 500);
setTimeout(function(){
    motorControll.stopAll();
}, 4000);

