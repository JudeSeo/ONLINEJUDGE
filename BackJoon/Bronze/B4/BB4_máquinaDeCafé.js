// 2022-08-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = Math.min(input[1] * 2 + input[2] * 4, Math.min(2 * (input[0] + input[2]), 4 * input[0] + 2 * input[1]))
console.log(answer);