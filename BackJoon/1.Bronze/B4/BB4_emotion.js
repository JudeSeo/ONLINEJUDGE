// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = (BigInt("0b"+input[0])*BigInt("0b"+input[1])).toString(2)
console.log(answer.toString());
