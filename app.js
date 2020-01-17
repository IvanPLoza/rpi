/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motor, testMotors, motorControll} = require("./src/gpioControlls/index.js");
var rpio = require('rpio');


console.log(rpio.open(32, rpio.OUTPUT, rpio.HIGH));