// 2022-02-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
answer = parseInt(input[0]) + parseInt(input[1])
console.log(answer)