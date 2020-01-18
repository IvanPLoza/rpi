var rpio = require('rpio');
var PiServo = require('pi-servo');

const MOTOR_HL1 = 32; // Left motor forward
const MOTOR_HL2 = 33; // Left motor backward
const MOTOR_HR1 = 38; // Right motor backward
const MOTOR_HR2 = 40; // right motor forward
const MOTOR_LEFT_EN = 31; // Enable left motor
const MOTOR_RIGHT_EN = 37; // Enable right motor
const SERVO_1 = 13; // Enable left motor
const SERVO_2 = 15; // Enable right motor

rpio.open(MOTOR_HL1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_LEFT_EN, rpio.OUTPUT, rpio.HIGH);
rpio.open(MOTOR_RIGHT_EN, rpio.OUTPUT, rpio.HIGH);
rpio.oprn(SERVO_1, rpio.OUTPUT, rpio.LOW);
rpio.oprn(SERVO_2, rpio.OUTPUT, rpio.LOW);

const servo1 = new PiServo(13); 
const servo2 = new PiServo(15); 

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

    static readPin(){

    }
}

class cameraControl{

    static up(deg){
        servo1.open().then(function(){  
            console.log("here");
            servo1.setDegree(100); // 0 - 180
        });
    }

}

const motor = new motorControll();

const testMotors = function(){
    motorControll.stopAll();
    setTimeout(function(){motorControll.goBackwards(); console.log("going back")}, 1000);
    setTimeout(function(){motorControll.goForward(); console.log("going forward")}, 2000);
    setTimeout(function(){motorControll.goLeft(); console.log("going left")}, 3000);
    setTimeout(function(){motorControll.goRight(); console.log("going right")}, 4000);
    setTimeout(function(){motorControll.stopAll(); console.log("stopping")}, 5000);
}

const testServo = function(){
    cameraControl.up(100);
}

module.exports = {motor, testServo};