// 2022-01-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var answer = input[0].charCodeAt(0)

console.log(answer);