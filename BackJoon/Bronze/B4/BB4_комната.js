// 2023-08-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "bad";
if ((Math.min(input[0], input[1]) >= input[2] * 2) && Math.min(input[0], input[1]) * 2 >= Math.max(input[0], input[1])) answer = "good"
console.log(answer);