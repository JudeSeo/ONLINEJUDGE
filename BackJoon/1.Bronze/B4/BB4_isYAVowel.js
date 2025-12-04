// 2024-08-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let a = input.filter(v => v == "a" || v == "e" || v == "i" || v == "o" || v == "u").length;
let b = input.filter(v => v == "a" || v == "e" || v == "i" || v == "o" || v == "u" || v == "y").length;
let answer = [a, b];
console.log(answer.join(" "));