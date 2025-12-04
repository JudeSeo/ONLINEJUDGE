// 2022-11-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
input = Number(input)
let answer = [];
for (let i = 0; i < input + 2; i++) {
    let temp = "";
    if (i == 0 || i == input + 1) {
        for (let k = 0; k < input + 2; k++) {
            temp += "@";
        }
        temp += "\n";
    } else {
        for (let k = 0; k < 1; k++) {
            temp += "@";
        }
        for (let k = 0; k < input; k++) {
            temp += " ";
        }
        for (let k = 0; k < 1; k++) {
            temp += "@";
        }
        temp += "\n";
    }
    answer.push(temp)
}
console.log(answer.join(""))