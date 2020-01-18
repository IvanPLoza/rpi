/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motor, testServo} = require("./src/gpioControlls/index.js");
require("./src/camera/index");

motor.stopAll();

setTimeout(function(){
    motor.goForward();
}, 1000);
setTimeout(function(){
    motor.goLeft();
}, 2000);
setTimeout(function(){
    motor.goForward();
}, 3000);
setTimeout(function(){
    motor.goRight();
}, 4000);

