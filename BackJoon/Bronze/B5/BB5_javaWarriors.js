// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let answer = input*4000;
console.log(answer);
