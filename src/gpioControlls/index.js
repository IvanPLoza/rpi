var rpio = require('rpio');
const {motorEncoder} = require("../motorEncoder/index");

const MOTOR_HL1 = 32; // Left motor forward
const MOTOR_HL2 = 40; // Left motor backward
const MOTOR_HR1 = 38; // Right motor backward
const MOTOR_HR2 = 33; // right motor forward
const MOTOR_LEFT_EN = 31; // Enable left motor
const MOTOR_RIGHT_EN = 37; // Enable right motor

var options = {
    gpiomem: false,         
    mapping: 'physical',    
    mock: undefined,        
}

//Init gpio and encoders
rpio.init(options);
motorEncoder.initEncoders();

//Set GPIO modes, put motors to low when starting
rpio.open(MOTOR_HL1, rpio.PWM);
rpio.open(MOTOR_HL2, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR1, rpio.OUTPUT, rpio.LOW);
rpio.open(MOTOR_HR2, rpio.PWM);
rpio.open(MOTOR_LEFT_EN, rpio.OUTPUT, rpio.HIGH);
rpio.open(MOTOR_RIGHT_EN, rpio.OUTPUT, rpio.HIGH);

var distanceErrorMax = 5;
var distanceLeftError = 0;
var distanceRightError = 0;

rpio.pwmSetClockDivider(1024);
rpio.pwmSetRange(MOTOR_HL1, 528);
rpio.pwmSetRange(MOTOR_HR2, 528);

class motorControll{

    static checkForErrors(){
        distanceLeftError = motorEncoder.readEncoders()[0] == false ? distanceLeftError++ : distanceLeftError;
        distanceRightError = motorEncoder.readEncoders()[1] == false ? distanceRightError++ : distanceRightError;

        if(distanceLeftError > distanceErrorMax){
            

            console.log("Left error happened", distanceLeftError);

            return 1;
        }
        if(distanceLeftError < distanceErrorMax){
            

            console.log("right error happened", distanceRightError);

            return 2;
        }

        return false;
    }

    static resetErrors(){
        distanceLeftError = 0;
        distanceRightError = 0;
    }

    static stopAll(){

        motorEncoder.resetEncoders();

        rpio.pwmSetData(MOTOR_HL1, 0);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.pwmSetData(MOTOR_HR2, 0);
    }

    static goBackwards(){

        if(checkForErrors() == 1){
            this.goLeft();
            setTimeout(function(){
                rpio.write(MOTOR_HL1, rpio.LOW);
                rpio.write(MOTOR_HL2, rpio.HIGH);
                rpio.write(MOTOR_HR1, rpio.HIGH);
                rpio.write(MOTOR_HR2, rpio.LOW);
            }, 300);
            
        }
        else if(checkForErrors() == 2){
            this.goRight();

            setTimeout(function(){
                rpio.write(MOTOR_HL1, rpio.LOW);
                rpio.write(MOTOR_HL2, rpio.HIGH);
                rpio.write(MOTOR_HR1, rpio.HIGH);
                rpio.write(MOTOR_HR2, rpio.LOW);
            }, 300);
        }
        else {
            rpio.write(MOTOR_HL1, rpio.LOW);
            rpio.write(MOTOR_HL2, rpio.HIGH);
            rpio.write(MOTOR_HR1, rpio.HIGH);
            rpio.write(MOTOR_HR2, rpio.LOW);
        }
    }

    static goForward(speedL, speedR){

        if(this.checkForErrors() == 1){
            //this.goLeft();
            setTimeout(function(){
                rpio.pwmSetData(MOTOR_HL1, speedL);
                rpio.write(MOTOR_HL2, rpio.LOW);
                rpio.write(MOTOR_HR1, rpio.LOW);
                rpio.pwmSetData(MOTOR_HR2, speedR);
            }, 0);
            
        }
        else if(this.checkForErrors() == 2){
            //this.goRight();

            setTimeout(function(){
                rpio.pwmSetData(MOTOR_HL1, speedL);
                rpio.write(MOTOR_HL2, rpio.LOW);
                rpio.write(MOTOR_HR1, rpio.LOW);
                rpio.pwmSetData(MOTOR_HR2, speedR);
            }, 0);
        }
        else {
            rpio.pwmSetData(MOTOR_HL1, speedL);
            rpio.write(MOTOR_HL2, rpio.LOW);
            rpio.write(MOTOR_HR1, rpio.LOW);
            rpio.pwmSetData(MOTOR_HR2, speedR);
        }
    }

    static goRight(){

        rpio.pwmSetData(MOTOR_HL1, 1024);
        rpio.write(MOTOR_HL2, rpio.LOW);
        rpio.write(MOTOR_HR1, rpio.HIGH);
        rpio.write(MOTOR_HR2, rpio.LOW);
    }

    static goLeft(){

        rpio.write(MOTOR_HL1, rpio.LOW);
        rpio.write(MOTOR_HL2, rpio.HIGH);
        rpio.write(MOTOR_HR1, rpio.LOW);
        rpio.pwmSetData(MOTOR_HR2, 1024);
    }

    static readPin(){

    }
}

class cameraControl{

    static up(deg){
        let pulseWidth = 1000;
let increment = 100;
setInterval(() => {
    servo.servoWrite(pulseWidth);
 
  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 1000);
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



module.exports = {motorControll, testServo};