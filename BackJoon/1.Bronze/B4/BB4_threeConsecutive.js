// 2024-09-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1];
let answer = "No";
if (input.indexOf("ooo") > -1) answer = "Yes";
console.log(answer);