// 2024-06-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = input[0].toString(input[1]).toUpperCase();
console.log(answer);
