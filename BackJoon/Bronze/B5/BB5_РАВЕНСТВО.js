// 2022-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(BigInt);
let answer = (input[1] - input[2]) / input[0];
console.log(answer.toString());
