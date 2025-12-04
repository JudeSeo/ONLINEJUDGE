// 2023-03-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 1;
let odd = input.filter(v => v % 2 == 1)
if (odd.length == 0)
    input.map(v => answer *= v);
else
    odd.map(v => answer *= v)
console.log(answer);
