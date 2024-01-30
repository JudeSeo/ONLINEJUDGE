// 2022-07-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let n = input[0];
let m = input[1];
let k = input[2];
let first = m > k ? k : m;
let second = m > k ? n - m : n - k;
let answer = first + second;
console.log(answer);