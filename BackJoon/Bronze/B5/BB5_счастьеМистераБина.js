// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let even = input.filter(v => v % 2 == 0).length;
let odd = input.length - even;
let answer = even > odd ? "Happy" : "Sad";
console.log(answer);
