// 2022-06-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = input[0] * 8 + input[1] * 3 - 28;
console.log(answer);
