// 2024-01-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = BigInt("0b" + input[0]) + BigInt("0b" + input[1]);
console.log(answer.toString(2));