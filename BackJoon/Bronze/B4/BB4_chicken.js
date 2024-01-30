// 2022-06-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let chicken = Number(input.slice(0, 1));
input = input.slice(1)[0].split(" ").map(v => Number(v));
let answer = 0;
answer = parseInt(input[0] / 2) + input[1];
console.log(answer > chicken ? chicken : answer);
