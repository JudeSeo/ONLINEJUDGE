// 2024-01-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v)).sort();
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v)).sort();
let answer = 0n;
for (let i = 0; i < input.length; i++) answer += BigInt(2 * (2 * i - input.length + 1) * input[i]);
console.log(answer.toString());