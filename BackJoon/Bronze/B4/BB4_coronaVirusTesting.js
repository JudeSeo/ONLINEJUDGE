// 2023-07-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
let retest = input[1] * input[2];
if (input[0] * input[1] < (retest + input[0])) answer = 1
else if (input[0] * input[1] > (retest + input[0])) answer = 2
console.log(answer)