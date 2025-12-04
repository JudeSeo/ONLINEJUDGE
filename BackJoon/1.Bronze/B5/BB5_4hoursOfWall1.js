// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = input[0] > input[1] ? "flight" : "high speed rail";
console.log(answer);
