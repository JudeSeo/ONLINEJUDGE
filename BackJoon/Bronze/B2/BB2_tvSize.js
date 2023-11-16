// 2023-11-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let rate = Math.sqrt(input[0] ** 2 / (input[1] ** 2 + input[2] ** 2));
let answer = Math.floor(input[1] * rate) + " " + Math.floor(input[2] * rate);
console.log(answer);