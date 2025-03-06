// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = Math.min(...input)
console.log(answer);
