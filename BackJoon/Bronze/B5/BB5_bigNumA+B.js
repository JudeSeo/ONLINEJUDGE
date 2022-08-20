// 2022-04-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = 0n;
let a = BigInt(input[0]);
let b = BigInt(input[1]);
answer = a+b;
console.log(answer.toString());