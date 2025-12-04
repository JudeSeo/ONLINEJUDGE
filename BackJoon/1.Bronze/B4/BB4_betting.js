// 2022-06-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [(100 / input).toFixed(10), (100 / (100 - input)).toFixed(10)];
console.log(answer.join("\n"));
