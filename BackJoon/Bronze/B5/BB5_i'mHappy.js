// 2022-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = [parseInt(input[2] / input[1]), parseInt(input[2] % input[1])];
console.log(answer.join(" "));
