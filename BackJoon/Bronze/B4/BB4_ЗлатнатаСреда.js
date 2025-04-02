// 2025-04-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>BigInt(v));
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => BigInt(v));
input.sort((a, b) => a < b ? -1 : 1);
let answer = input[1].toString();
console.log(answer);
