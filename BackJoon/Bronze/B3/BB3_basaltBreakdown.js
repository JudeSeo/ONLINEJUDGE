// 2023-09-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = Math.sqrt((input * 2) / (3 * Math.sqrt(3)))*6
console.log(answer)