// 2024-01-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let w = input.splice(0, 10).map(v => Number(v)).sort((a, b) => b - a);
let k = input.splice(0, 10).map(v => Number(v)).sort((a, b) => b - a);
let wSum = w[0] + w[1] + w[2];
let kSum = k[0] + k[1] + k[2];
answer.push(`${wSum} ${kSum}`);
console.log(answer.join(" "));