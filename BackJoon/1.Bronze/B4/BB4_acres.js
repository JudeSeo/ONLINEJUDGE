// 2023-08-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = Math.ceil((input[0] * input[1] / 4840) / 5)
console.log(answer);
