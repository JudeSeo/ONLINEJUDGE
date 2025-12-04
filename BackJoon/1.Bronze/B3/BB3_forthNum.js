// 2023-01-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v)).sort((a, b)=>a-b);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let answer = 0, num = Math.min(input[2] - input[1], input[1] - input[0]);
if (input[0] + num != input[1])
    answer = input[0] + num;
else if (input[1] + num != input[2])
    answer = input[1] + num;
else answer = input[2] + num;
console.log(answer)
