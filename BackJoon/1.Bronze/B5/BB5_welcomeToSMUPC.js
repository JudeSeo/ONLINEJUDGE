// 2024-07-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let word = "CWelcomeToSMUP";
let answer = word[input % 14];
console.log(answer);