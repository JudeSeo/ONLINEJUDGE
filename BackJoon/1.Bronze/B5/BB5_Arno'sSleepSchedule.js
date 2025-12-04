// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = input[1] - input[0];
console.log(answer < 0 ? answer + 24 : answer);
