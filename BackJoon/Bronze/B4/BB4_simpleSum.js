// 2023-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = "NO";
if (input[4] == Number(input[0]) + Number(input[2])) answer = "YES";
console.log(answer)