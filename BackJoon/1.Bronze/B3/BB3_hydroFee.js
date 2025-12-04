// 2023-02-03
let fs = require('fs');
// let [a, b, c, d, p] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let [a, b, c, d, p] = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let x = p * a
let y = b;
if (p > c) y += (d * (p - c))
console.log(x > y ? y : x)