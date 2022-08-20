// 2022-06-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let vacation = input[0]
let korean = (input[1] % input[3] == 0 ? input[1] / input[3] : parseInt(input[1] / input[3]) + 1);
let math = (input[2] % input[4] == 0 ? input[2] / input[4] : parseInt(input[2] / input[4]) + 1);
let answer = vacation - (korean > math ? korean : math)
console.log(answer);