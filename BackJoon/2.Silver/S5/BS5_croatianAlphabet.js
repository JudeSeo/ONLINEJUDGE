// 2024-10-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
input = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, '1');
let answer = input.length
console.log(answer);
