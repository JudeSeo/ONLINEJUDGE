// 2025-03-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let [a, b] = input[0].split("");
let [c, d] = input[1].split("");
let answer = [];
let x = Math.abs(a.charCodeAt() - c.charCodeAt());
let y = Math.abs(b - d);
answer.push(Math.min(x, y))
answer.push(Math.max(x, y))
console.log(answer.join(" "));
