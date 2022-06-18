// 202-06-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(BigInt);
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(BigInt);
let answer = []
answer.push(input[0]/input[1]);
answer.push(input[0]%input[1]);
console.log(answer.join("\n"));
