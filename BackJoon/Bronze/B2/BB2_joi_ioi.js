// 2024-01-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = [];
let joi = 0;
let ioi = 0;
input.forEach((v, i) => {
    if (v == "J") {
        if (input[i + 1] == "O") {
            if (input[i + 2] == "I") {
                joi++;
            }
        }
    } else if (v == "I") {
        if (input[i + 1] == "O") {
            if (input[i + 2] == "I") {
                ioi++;
            }
        }
    }
})
answer.push(joi);
answer.push(ioi);
console.log(answer.join("\n"));