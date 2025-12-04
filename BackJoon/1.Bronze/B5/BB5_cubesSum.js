// 2024-06-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v))[0];
let sum = (input * (input + 1)) / 2;
let answer = [sum, sum ** 2, sum ** 2];
console.log(answer.join("\n"));
