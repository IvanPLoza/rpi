var rpio = require('rpio');

const MOTOR_HL1 = 12; // Left motor forward
const MOTOR_HL2 = 13; // Left motor backward
const MOTOR_HR1 = 20; // Right motor backward
const MOTOR_HR2 = 21; // right motor forward

class motorControll{

    static stopAll(){
        rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
    }

    static goBackwards(){
        rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.HIGH);
        rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.HIGH);
        rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
    }

    static goForward(){
        rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.HIGH);
        rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.HIGH);
    }

    static goRight(){
        rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.HIGH);
        rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
    }

    static goLeft(){
        rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
        rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.HIGH);
    }
}

const motor = new motorControll();

function testMotors(){
    motor.stopAll();
    setTimeout(motor.goBackwards(), 1000);
    setTimeout(motor.goForward(), 1000);
    setTimeout(motor.goLeft(), 1000);
    setTimeout(motor.goRight(), 1000);
    setTimeout(motor.stopAll(), 1000);
}

export {motorControll, testMotors}