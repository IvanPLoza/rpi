/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motorControll, testServo} = require("./src/gpioControlls/index.js");
require("./src/camera/index");

motorControll.stopAll();

motorControll.goForward(120, 156);
setTimeout(function(){
    motorControll.stopAll();
}, 3000);

