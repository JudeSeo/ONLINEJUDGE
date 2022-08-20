// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = input[0] + input[1] + input[3] + input[2] + input[3] + input[1] + Math.abs(input[2] - input[0]) + 4
console.log(answer);
