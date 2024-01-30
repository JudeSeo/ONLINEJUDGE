// 2022-06-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [input[0] + input[1], input[0] - input[1]];
answer.sort((a, b) => b - a)
console.log(answer.join("\n"));
