// 2022-07-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = 0;
if (input[0] - 1 >= input[2] && input[1] - 1 >= input[3])
    answer = 1;
console.log(answer);
