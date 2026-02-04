console.time('Total execution time')
const fs = require('fs');
let sum = 0;
function readFile (){
    let data = fs.readFileSync('input2.txt', {encoding: 'utf8', flag: 'r'});
    data = data.split(",")
    console.log(data)
    return data;
}
function IdentifyInvalidId(data){
    for (let i = 0; i < data.length; i++){
        let singleIdRange = data[i].split("-");
        let min = parseInt(singleIdRange[0]);
        let max = parseInt(singleIdRange[1]);
        //console.log("Range: ", singleIdRange, "Min: ", min, " Max: ", max);
        for (let num = min; num <= max; num++){
            let numLength = num.toString().length;
            if (numLength > 1 && numLength % 2 === 0){
                let invalid = true;
                let half = numLength / 2;
                for (let counter = 0; counter < half; counter++){
                    if (num.toString()[counter] !== num.toString()[counter + half]){
                        invalid = false;
                        break;
                    }
                }
                if (invalid){
                    sum += num;
                    //console.log("Invalid Id: ", num, " Sum: ", sum);
                }
            }   
        }
    }
}
let data = readFile()
IdentifyInvalidId(data)
console.log("Final Sum: ", sum)
console.timeEnd('Total execution time')