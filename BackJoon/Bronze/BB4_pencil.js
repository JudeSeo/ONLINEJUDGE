// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let pencil = input[0];
let a = Math.ceil(pencil / input[1]) * input[2];
let b = Math.ceil(pencil / input[3]) * input[4];
let answer = a > b ? b : a;
console.log(answer)
