// 2024-09-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let sum = 0;
input.map(v => sum += v);
let answer = sum == 0 ? "Stay" : sum > 0 ? "Right" : "Left";
console.log(answer);