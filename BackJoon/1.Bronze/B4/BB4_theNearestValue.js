// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = input[0];
if (answer >= input[2])
    answer = input[2];
else if (answer <= input[1])
    answer = input[1];
console.log(answer);
