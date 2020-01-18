var rpio = require('rpio');

const MOTOR_HL1 = 32; // Left motor forward
const MOTOR_HL2 = 33; // Left motor backward
const MOTOR_HR1 = 38; // Right motor backward
const MOTOR_HR2 = 40; // right motor forward
const MOTOR_LEFT_EN = 31; // Enable left motor
const MOTOR_RIGHT_EN = 37; // Enable right motor

var options = {
    gpiomem: false,          /* Use /dev/gpiomem */
    mapping: 'physical',    /* Use the P1-P40 numbering scheme */
    mock: undefined,        /* Emulate specific hardware in mock mode */
}


rpio.init(options);

rpio.open(MOTOR_HL1, rpio.PWM);
rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_LEFT_EN, rpio.OUTPUT, rpio.HIGH);
rpio.open(MOTOR_RIGHT_EN, rpio.OUTPUT, rpio.HIGH);

rpio.pwmSetClockDivider(64);
rpio.pwmSetRange(MOTOR_HL1, 1024);
//rpio.pwmSetRange(MOTOR_HR2, 1024);

class motorControll{

    static stopAll(){
        rpio.write(MOTOR_HL1, rpio.LOW);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.write(MOTOR_HR2, rpio.LOW);
    }

    static goBackwards(){
        rpio.write(MOTOR_HL1, rpio.LOW);
        rpio.write(MOTOR_HL2, rpio.HIGH);
        rpio.write(MOTOR_HR1, rpio.HIGH);
        rpio.write(MOTOR_HR2, rpio.LOW);
    }

    static goForward(speed){
        rpio.write(MOTOR_HL1, speed);
        rpio.write(MOTOR_HL2, 0);
        rpio.write(MOTOR_HR1, 0);
        rpio.write(MOTOR_HR2, 0);
    }

    static goRight(){
        rpio.write(MOTOR_HL1, rpio.HIGH);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.write(MOTOR_HR2, rpio.LOW);
    }

    static goLeft(){
        rpio.write(MOTOR_HL1, rpio.LOW);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.write(MOTOR_HR2, rpio.HIGH);
    }

    static readPin(){

    }
}


const testMotors = function(){
    motorControll.goForward(512);
    setTimeout(function(){
        motorControll.stopAll();
    }, 1000);
}

const testServo = function(){
    cameraControl.up(100);
}



module.exports = {testMotors, testServo};