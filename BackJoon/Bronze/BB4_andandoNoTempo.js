// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
input.sort((a, b) => a - b);
let answer = "N";
if (input[0] + input[1] == input[2])
    answer = "S";
if (input[0] == input[1] || input[1] == input[2])
    answer = "S";
console.log(answer);
