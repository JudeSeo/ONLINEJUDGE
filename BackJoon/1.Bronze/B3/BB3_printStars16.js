// 2022-11-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 0; i < input; i++) {
    let temp = "";
    for (let j = input-1; j > i; j--) {
        temp += " "
    }
    for (let k = 0; k <= i; k++) {
        temp += "* ";
    }
    answer.push(temp.trimEnd())
}
console.log(answer.join("\n"));