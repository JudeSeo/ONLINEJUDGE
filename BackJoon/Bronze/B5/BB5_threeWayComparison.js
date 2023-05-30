// 2023-05-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = input[0] > input[1] ? 1 : input[0] < input[1] ? -1 : 0;
console.log(answer);