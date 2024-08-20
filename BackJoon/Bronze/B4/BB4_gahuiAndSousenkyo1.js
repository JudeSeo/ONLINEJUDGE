// 2024-08-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let num = input.splice(0, 1)[0];
let answer = input.filter(v => v >= num - 1000).length;
console.log(answer);