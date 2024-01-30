// 2022-06-20
let fs = require('fs');
// let inputA = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
// let inputC = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
let inputA = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v=>Number(v));
let inputC = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[1].split(" ").map(v=>Number(v));
let answer = [];
answer.push(inputC[0]-inputA[2]);
answer.push(inputC[1]/inputA[1]);
answer.push(inputC[2]-inputA[0]);
console.log(answer.join(" "));
