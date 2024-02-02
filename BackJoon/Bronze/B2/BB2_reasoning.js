// 2024-02-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let num = input.splice(0, 1)[0];
let answer = 0;
if (input[num - 1] - input[num - 2] == input[num - 2] - input[num - 3]) answer = input[num - 1] + (input[num - 1] - input[num - 2])
else answer = input[num - 1] * (input[num - 1] / input[num - 2])
console.log(answer);