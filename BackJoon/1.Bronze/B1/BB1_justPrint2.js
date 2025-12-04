// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('예제.txt').toString().split('\r\n');

console.log(input.join("\n"));