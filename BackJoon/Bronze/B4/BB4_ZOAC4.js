// 2022-08-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = Math.ceil(input[0] / (input[2] + 1)) * Math.ceil(input[1] / (input[3] + 1))
console.log(answer);