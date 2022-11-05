// 2022-11-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ").map(v=>Number(v));
let min = Math.min(...input);
let answer = input.indexOf(min)
console.log(answer)