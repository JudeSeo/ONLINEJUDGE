// 2023-02-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = "unrated"
if(input.indexOf("d2") > -1 || input.indexOf("D2") > -1 ) answer = "D2"
console.log(answer);
