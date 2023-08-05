// 2023-08-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = input[0] > input[1] ? 500 : 0;
answer += 50 * input[0];
answer -= 10 * input[1]
console.log(answer)