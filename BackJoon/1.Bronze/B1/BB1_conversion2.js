// 2025-03-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = input[0].toString(input[1]).toUpperCase();
console.log(answer);
