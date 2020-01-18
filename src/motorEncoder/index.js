const rpio = require('rpio'); //GPIO lib

//define pins
const LEFTM_ENCODER = 24;
const RIGHTM_ENCODER = 26;

//set gpios to input mode
rpio.open(LEFTM_ENCODER, rpio.INPUT);
rpio.open(RIGHTM_ENCODER, rpio.INPUT);

class motorEncoder{
    static testEncoders(){
        console.log(this.readEncoders());
    }
    static readEncoders(){

        let result = [0, 0];

        //Read states
        let leftState = rpio.read(LEFTM_ENCODER);
        let rightState = rpio.read(LEFTM_ENCODER);

        //Save to results
        result[0] = leftState? true : false;
        result[1] = rightState? true : false;

        return result;
    }
}

module.exports = {motorEncoder};