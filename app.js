/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motor, testMotors, motorControll} = require("./src/gpioControlls/index.js");

setInterval(function(){
    motorControll.goBackwards();
}, 300);


