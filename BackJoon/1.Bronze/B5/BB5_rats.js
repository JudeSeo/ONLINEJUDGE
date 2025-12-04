// 2022-06-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = parseInt((input[0] + 1) * (input[1] + 1) / (input[2] + 1)) - 1
console.log(answer);
