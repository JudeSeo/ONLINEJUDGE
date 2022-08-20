// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let slice = input[0].split(" ")[0] / input[0].split(" ")[1];
let whole = input[1].split(" ")[0] ** 2 * Math.PI / input[1].split(" ")[1]
let answer = slice > whole ? "Slice of pizza" : "Whole pizza";
console.log(answer);
