// 2024-08-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
input = input[0].split("");
let char = input[0];
let cnt = input.filter(v => v != char).length;
let answer = cnt == 0 ? "Yes": "No";
console.log(answer);