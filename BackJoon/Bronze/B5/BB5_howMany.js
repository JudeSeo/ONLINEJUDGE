// 2023-05-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
if (input[1] == 1) answer = 280;
else if (input[0] >= 12 && input[0] <= 16) answer = 320;
else answer = 280;
console.log(answer);