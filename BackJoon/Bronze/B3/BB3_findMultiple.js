// 2023-01-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
let num = input.splice(0, 1)[0];
input.forEach(v => {
    if (v == '0') return;
    if (v % num == 0) answer.push(`${v} is a multiple of ${num}.`);
    else answer.push(`${v} is NOT a multiple of ${num}.`);
})
console.log(answer.join("\n"));
