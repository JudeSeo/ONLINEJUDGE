// 2023-05-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>BigInt(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v=>BigInt(v));
let answer = input[0]+input[1]
console.log(answer.toString())