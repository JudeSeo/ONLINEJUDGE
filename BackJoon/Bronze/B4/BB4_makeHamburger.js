// 2023-06-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let bread = Math.floor(input[0] / 2);
let answer = Math.min(bread, input[1]);
console.log(answer)