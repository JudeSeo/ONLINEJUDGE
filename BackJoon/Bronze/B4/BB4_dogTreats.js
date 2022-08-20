// 2022-07-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let score = input[0] * 1 + input[1] * 2 + input[2] * 3
let answer = score >= 10 ? "happy" : "sad";
console.log(answer);
