// 2025-12-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = input[0] * input[1] - 1;
console.log(answer);
