// 2023-07-31
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = Math.floor(Math.sqrt(input));
console.log(`The largest square has side length ${answer}.`)