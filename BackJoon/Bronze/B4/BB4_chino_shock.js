// 2023-10-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = input.length;
let col = input.filter(v => v == ":").length;
let under = input.filter(v => v == "_").length;
answer += (col + under * 5);
console.log(answer);