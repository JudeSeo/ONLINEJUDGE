// 2022-06-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let firstB = input[0].split(" ").map(v=>Number(v))
let secondB = input[1].split(" ").map(v=>Number(v))
let answer = firstB[0] + secondB[1];
answer = answer < firstB[1] + secondB[0] ? answer : firstB[1] + secondB[0];
console.log(answer);
