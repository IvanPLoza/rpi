/**********************************
 * 
 * Hackathon Hotel krilo RPI solution
 * jagodice i bobice :)
 * 
 */

const {motor, testMotors, motorControll} = require("./src/gpioControlls/index.js");
const {piCamStream} = require("./src/camera/index.js");

testMotors();

piCamStream();