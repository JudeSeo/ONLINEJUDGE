// 2022-06-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let c4 = 0.229 * 0.324;
let a3 = 0.297 * 0.42
let a4 = 0.210 * 0.297;
let answer = input[0] * 2 * c4 + input[1] * 2 * a3 + input[2] * a4
console.log(answer.toFixed(6));
