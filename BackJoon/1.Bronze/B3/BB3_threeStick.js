// 2025-12-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v)).sort((a, b)=>a-b);
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v)).sort((a, b)=>a-b);
let answer = 0;
if (input[1] == input[2]) answer = input[0] + input[1] + input[2];
else if (input[0] + input[1] <= input[2]) answer = (input[0] + input[1]) * 2 - 1;
else if (input[0] + input[1] > input[2])  answer = input[0] + input[1] + input[2];
else if (input[0] == input[1] && input[2] == input[1]) answer = input[0] * 3;
else answer = input[0] + input[1] + input[2];
console.log(answer);
