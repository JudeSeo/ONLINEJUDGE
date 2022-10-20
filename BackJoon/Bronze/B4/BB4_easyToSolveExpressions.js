// 2022-10-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 3;
input.sort((a, b) => a - b);
if (input[0] + input[1] == input[2])
    answer = 1;
else if (input[0] * input[1] == input[2])
    answer = 2;
console.log(answer)
