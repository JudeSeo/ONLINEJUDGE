// 2023-05-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').sort((a, b) => a - b);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').sort((a, b) => a - b);
let answer = input[Math.floor(input.length/2)]
console.log(answer)