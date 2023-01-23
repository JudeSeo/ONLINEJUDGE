// 2023-01-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').filter(v=>v != "");
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').filter(v=>v != "");
console.log(input.length);
