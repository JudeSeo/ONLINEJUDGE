// 2023-01-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').filter(v=>v != "");
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').filter(v=>v != "");
console.log(input.length);
