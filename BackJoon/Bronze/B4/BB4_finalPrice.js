// 2023-07-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = 0;
input.forEach(v => answer += v)
console.log(answer)