// 2024-07-30
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let sum1 = Number(input[0]) + Number(input[1]) - Number(input[2]);
let sum2 = input[0] + input[1] - input[2];
console.log(sum1);
console.log(sum2);