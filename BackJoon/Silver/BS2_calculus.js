// 2024-06-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = [];
let [s, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let [a, b] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let num = Number(input[0]);
answer.push(a * num + b);
if (a == 0)
    answer.push("0 0");
else
    answer.push(s + " " + m * Math.abs(a));
console.log(answer.join("\n"));
