// 2022-08-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [];
let a = input[0] + input[1];
let b = input[0] - input[1]
if (a % 2 != 0 || a < 0 || b < 0)
    answer = [-1]
else
    answer = [(input[0] + input[1]) / 2, (input[0] - input[1]) / 2];
console.log(answer.join(" "));