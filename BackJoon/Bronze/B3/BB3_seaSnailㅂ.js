// 2022-10-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
input = Number(input)
let answer = [];
for (let i = 0; i < 5; i++) {
    let temp = "";
    if ((i == 2) || (i == 4)) {
        for (let j = 0; j < input; j++) {
            for (let k = 0; k < 5 * input; k++) {
                temp += "@";
            }
            temp += "\n";
        }
    } else {
        for (let j = 0; j < input; j++) {
            for (let k = 0; k < input; k++) {
                temp += "@";
            }
            for (let k = 0; k < 3 * input; k++) {
                temp += " ";
            }
            for (let k = 0; k < input; k++) {
                temp += "@";
            }
            temp += "\n";
        }
    }
    answer.push(temp)
}
console.log(answer.join(""))