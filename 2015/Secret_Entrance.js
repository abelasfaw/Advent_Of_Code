console.time('Total execution time')
const fs = require('fs');

let position = 50;
let zerosPassed = 0;

function readFile (){
    let data = fs.readFileSync('input.txt', {encoding: 'utf8', flag: 'r'});
    data = data.split("\n").slice(0,data.length - 3);
    let dialNumbers = data.map((el) => {
        const num = parseInt(el.slice(1));
        return el.startsWith('R') ? num : -num; 
    })
    return dialNumbers
}
function calculateDialPosition (current, change){
    if (change  === 0){
        return current
    }

    let steps = Math.abs(change)
    //normalize updated position
    let newPosition = current + change;
    let finalPosition = ((newPosition % 100) + 100) % 100;

    //full rotation or rounds of 100 steps which will each have 1 zero passed.
    let zeros = Math.floor(steps / 100);

    //steps under a full rotation, run through steps and check if postion passes zero. minimizes loop to a max of 99 steps
    let passedPosition = current;
    let stepChange = change > 0 ? 1 : -1;
    for (var i = 0; i < steps % 100; i++){
        passedPosition = (((passedPosition + stepChange) % 100) + 100) % 100;
        if (passedPosition === 0){
            zeros += 1;
        }
    }
    return {finalPosition, zeros }
}
function dial(inputNumber){
    let zeroCount = 0;
    for (var i = 0; i < inputNumber.length; i++){
        const {finalPosition, zeros} = calculateDialPosition(position, inputNumber[i]);
        zerosPassed += zeros;
        position = finalPosition;

        if (position == 0){
            zeroCount += 1;
        }
    }
    return zeroCount;
}

let inputs = readFile()
let code = dial(inputs)
console.log("code: ",code, " Zeros passed: ", zerosPassed);
console.timeEnd('Total execution time')