// 2024-10-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v))[0];
let answer = Math.floor(Math.sqrt(input));
console.log(answer);
