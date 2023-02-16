// 2023-02-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = input.slice(input.length-5).join("")
console.log(answer);
