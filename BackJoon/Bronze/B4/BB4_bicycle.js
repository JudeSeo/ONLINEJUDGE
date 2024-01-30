// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let a = input[0] + input[1] * (input[4] - 30 > 0 ? input[4] - 30 : 0)*21
let b = input[2] + input[3] * (input[4] - 45 > 0 ? input[4] - 45 : 0)*21
let answer = [a, b];
console.log(answer.join(" "));
