// 2022-06-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("/").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("/").map(v => Number(v));
let answer = "gosu";
if (input[0] + input[2] < input[1] || input[1] == 0) answer = "hasu";
console.log(answer);
