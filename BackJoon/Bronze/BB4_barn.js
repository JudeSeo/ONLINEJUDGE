// 2022-06-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let cow = input[0];
let height = input[1];
let width = input[2];
let square = input[3];
let answer = parseInt(height / square) * parseInt(width / square)
<<<<<<< HEAD
console.log(answer > cow ? cow : answer);