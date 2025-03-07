// 2025-03-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = input % 2024 == 0 ? "Yes" : "No";
if (input > 100000) answer = "No";
console.log(answer);