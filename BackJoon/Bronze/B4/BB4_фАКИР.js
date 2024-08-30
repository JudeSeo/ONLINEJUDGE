// 2024-08-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v)).sort((a, b) => b - a);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v)).sort((a, b) => b - a);
let answer = input[0] + input[1] + input[2] + 1
console.log(answer);