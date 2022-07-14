// 2022-07-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
let fuel = 60+input[1];
let answer = 0;
if(input[0]>=fuel)
    answer = (input[0]-fuel)*3000+fuel*1500
else
    answer = input[0]*1500
console.log(answer);
