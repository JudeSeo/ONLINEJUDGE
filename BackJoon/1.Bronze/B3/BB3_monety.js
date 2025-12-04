// 2022-11-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let answer = input[0].split(" ").map(v => Number(v)).filter(v => v == 1).length;
console.log(num - answer > answer ? answer : num - answer)