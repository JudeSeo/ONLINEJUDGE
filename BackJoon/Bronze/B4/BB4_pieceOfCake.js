// 2022-07-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let cake = input[0];
let width = cake - input[1] > input[1] ? cake - input[1] : input[1];
let height = cake - input[2] > input[2] ? cake - input[2] : input[2];
let answer = width * height * 4;
console.log(answer);