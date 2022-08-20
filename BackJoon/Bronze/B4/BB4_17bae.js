// 2022-07-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0]
let answer = (BigInt("0b"+input) * 17n).toString(2);
console.log(answer);