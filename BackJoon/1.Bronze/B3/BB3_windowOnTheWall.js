// 2022-11-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let w = input[0] - input[2] * 2;
let h = input[1] - input[2] * 2
let answer = (w <= 0 || h <= 0) ? 0 : w * h;
console.log(answer)