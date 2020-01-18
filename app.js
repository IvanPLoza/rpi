/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motorControll, testServo} = require("./src/gpioControlls/index.js");
//require("./src/camera/index");

var motor = new motorControll();

motor.goForward();
setTimeout(function(){
  motor.stopALL();
}, 1000);