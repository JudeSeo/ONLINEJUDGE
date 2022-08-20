// 2022-06-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = input[0] * input[1] - input[2];
console.log(answer > 0 ? answer : 0);
