// 2023-12-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').sort((a, b) => a - b);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').sort((a, b) => a - b);
let sum = 0;
input.map(v => sum += Number(v));
let answer = [sum / 5, input[2]];
console.log(answer.join("\n"))