// 2032-05-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "Anything";
if (input[2] >= input[0] && input[1] > input[2]) answer = "Subway"
else if (input[1] < input[2]) answer = "Bus";
console.log(answer);