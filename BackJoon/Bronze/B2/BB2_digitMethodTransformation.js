// 2023-12-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = parseInt(input[0], input[1]);
console.log(answer);