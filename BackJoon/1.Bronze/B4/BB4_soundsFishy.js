// 2022-07-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
let answer = "";
if (input[0] < input[1] && input[1] < input[2] && input[2] < input[3])
    answer = "Fish Rising";
else if (input[0] > input[1] && input[1] > input[2] && input[2] > input[3])
    answer = "Fish Diving";
else if (input[0] == input[1] && input[1] == input[2] && input[2] == input[3])
    answer = "Fish At Constant Depth";
else
    answer = "No Fish";
console.log(answer)
