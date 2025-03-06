// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let max = input[0].split(" ").map(v => Number(v));
let mel = input[1].split(" ").map(v => Number(v));
let maxTime = max[0] * 3 + max[1] * 20 + max[2] * 120
let melTime = mel[0] * 3 + mel[1] * 20 + mel[2] * 120
let answer = maxTime > melTime ? "Max" : maxTime < melTime ? "Mel" : "Draw";
console.log(answer);
