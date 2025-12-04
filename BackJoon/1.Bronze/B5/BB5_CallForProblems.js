// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = input.filter(v => v % 2 == 1).length;
console.log(answer);
