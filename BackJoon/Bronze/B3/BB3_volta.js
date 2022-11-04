// 2022-11-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = Math.ceil(input[1] / (input[1] - input[0]));
console.log(answer)