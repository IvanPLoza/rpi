const rpio = require('rpio'); //GPIO lib

//define pins
const LEFTM_ENCODER = 24;
const RIGHTM_ENCODER = 26;

//set gpios to input mode
rpio.open(LEFTM_ENCODER, rpio.INPUT);
rpio.open(RIGHTM_ENCODER, rpio.INPUT);

var leftMotorDistance = 0;
var rightMotorDistance = 0;

var previousStateLeft = 0;
var previousStateRight = 0;

class motorEncoder{
    static testEncoders(){
        console.log(this.readEncoders());
    }
    static readEncoders(){

        let result = [0, 0];

        //Read states
        let leftState = rpio.read(LEFTM_ENCODER);
        let rightState = rpio.read(RIGHTM_ENCODER);

        //Save to results
        result[0] = leftState != previousStateLeft? leftMotorDistance++ : false;
        result[1] = rightState != previousStateRight? leftMotorDistance++ : false;

        return result;
    }
    static initEncoders(){
        let leftState = rpio.read(LEFTM_ENCODER);
        let rightState = rpio.read(RIGHTM_ENCODER);

        leftMotorDistance = leftState;
        previousStateLeft = leftState;
        rightMotorDistance = rightState;
        previousStateRight = rightState;
    }

    static resetEncoders(){
        let leftState = rpio.read(LEFTM_ENCODER);
        let rightState = rpio.read(RIGHTM_ENCODER);
        leftMotorDistance = 0;
        rightMotorDistance = 0;
        previousStateLeft = leftState;
        previousStateRight = rightState;
    }
}

module.exports = {motorEncoder};