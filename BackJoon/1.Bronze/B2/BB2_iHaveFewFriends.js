// 2024-06-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let regex = /[0-9]/g;				// 숫자가 아닌 문자열을 선택하는 정규식
var result = input[0].replace(regex, "");
let answer = result.indexOf(input[1]) > -1 ? 1 : 0
console.log(answer);
