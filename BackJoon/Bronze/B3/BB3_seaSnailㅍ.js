// 2022-10-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
input = Number(input)
let answer = [];
for (let i = 0; i < 5; i++) {
    let temp = "";
    if (i == 1 || i == 3) {
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