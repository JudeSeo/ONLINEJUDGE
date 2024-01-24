// 2024-01-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("(^0^)");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("(^0^)");
let left = input[0].split("").filter(v => v == "@").length
let right = input[1].split("").filter(v => v == "@").length
let answer = [left, right];
console.log(answer.join(" "));