// 2022-07-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(BigInt);
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(BigInt);
let answer = input[0]*input[1]/2n;
console.log(answer.toString());