// 2023-08-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "E";
let m = input[0] * input[1];
let p = input[2] * input[3];
if (m > p) answer = "M";
else if (m < p) answer = "P";
console.log(answer);