var rpio = require('rpio');

const MOTOR_HL1 = 12; // Left motor forward
const MOTOR_HL2 = 13; // Left motor backward
const MOTOR_HR1 = 20; // Right motor backward
const MOTOR_HR2 = 21; // right motor forward
const MOTOR_LEFT_EN = 6; // Enable left motor 
const MOTOR_RIGHT_EN = 26; // Enable right motor

rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_LEFT_EN, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_LEFT_EN, rpio.OUTPUT, rpio.LOW);

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

    static goForward(){
        rpio.write(MOTOR_HL1, rpio.HIGH);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.write(MOTOR_HR2, rpio.HIGH);
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
}

const motor = new motorControll();

const testMotors = function(){
    motorControll.stopAll();
    setTimeout(function(){motorControll.goBackwards()}, 1000);
    setTimeout(function(){motorControll.goForward()}, 1000);
    setTimeout(function(){motorControll.goLeft()}, 1000);
    setTimeout(function(){motorControll.goRight()}, 1000);
    setTimeout(function(){motorControll.stopAll()}, 1000);
}

module.exports = {motor, testMotors};