// 2022-03-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.sort((a, b) => (b - a))
console.log(input.join("\n"));