// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = input[0] * 1000 + input[1] * 10000;
console.log(answer);
