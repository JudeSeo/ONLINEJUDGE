// 2024-08-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "Padaeng_i Cry";
let sum = 0;
input[2].split(" ").map(v => sum += Number(v));
if (sum >= input[0]) answer = "Padaeng_i Happy";
console.log(answer);