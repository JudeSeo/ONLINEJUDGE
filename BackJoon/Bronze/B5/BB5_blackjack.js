// 2025-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = 0;
input.map(v => answer += Number(v));
console.log(answer <= 21 ? 1 : 0);
