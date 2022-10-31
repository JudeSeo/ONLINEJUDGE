// 2022-10-31
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ").sort((a, b) => b - a);
console.log(input[0])