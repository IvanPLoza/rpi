const {motor, testMotors, motorControll} = require("./src/gpioControlls/index.js");

function createMap(map, obstacles){

    var map = [
        [], 
        []
    ];

    var mapStatus = [];
    var mapLabels = [];
    var result = [];

    let counterX = 0;
    let counterY = 0;
    let elementsLength = map.length;

    const startingChar = "A"; //for x label
    const startingNumber = "0"; //for y label

    //A-Z
    for(counterX; counterX < elementsLength; counterX++){

        mapStatus.push(new Array());
        mapLabels.push(new Array());

        //A1-n, B1-n...
        for(counterY; counterY < map[counterX]; counterY++){

            mapLabels[counterX].push(String.fromCharCode(startingChar.charCodeAt(0) + counterX) + String(counterY + 1)); //A1, A2...
            mapStatus[counterX].push(0);
        }
    }

    mapStatus[0][0] = 0;

    obstaclesLength = obstacles.length;

    counterObstacles = 0;
    CounterElement = "A";


    return result.push(mapStatus, mapLabels);
}

module.exports = {createMap};