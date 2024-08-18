// 2024-08-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v)).sort((a, b) => a - b);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v)).sort((a, b) => a - b);
let answer = 0;
if (input[0] + input[1] == input[2]) answer = 1;
console.log(answer);