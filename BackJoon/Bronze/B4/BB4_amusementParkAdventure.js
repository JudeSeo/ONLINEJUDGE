// 2024-08-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let height = Number(input.splice(0, 1)[0].split(" ")[1]);
let answer = input[0].split(" ").map(v => Number(v)).filter(v => v <= height).length;
console.log(answer);