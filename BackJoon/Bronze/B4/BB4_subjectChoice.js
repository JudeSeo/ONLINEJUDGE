// 2022-07-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let science = input.slice(0, 4).map(v=>Number(v));
let society = input.slice(4).map(v=>Number(v));
let answer = science.reduce((a, b)=>a+b);
answer -= Math.min(...science);
answer += Math.max(...society);
console.log(answer);
