/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motorControll, testServo} = require("./src/gpioControlls/index.js");
require("./src/camera/index");
require("./src/socket/index");

motorControll.stopAll();

/*motorControll.goForward(512, 512);
setTimeout(function(){
    motorControll.stopAll();
}, 3000);*/

