// 2023-03-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = "";
if (input % 4 == 0) answer = "Even";
else if (input % 2 == 0) answer = "Odd";
else answer = "Either";
console.log(answer)
