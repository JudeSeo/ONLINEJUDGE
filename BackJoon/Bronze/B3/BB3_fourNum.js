// 2023-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = parseInt(input[0] + input[1]) + parseInt(input[2] + input[3])
console.log(answer);
