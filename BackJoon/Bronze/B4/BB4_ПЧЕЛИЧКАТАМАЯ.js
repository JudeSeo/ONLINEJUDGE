// 2022-07-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let avg = (input[0] + input[1] + input[2]) / 3
let answer = (avg - input[0]) + (avg - (input[1] - (avg - input[0])));
console.log(Math.abs(answer))
