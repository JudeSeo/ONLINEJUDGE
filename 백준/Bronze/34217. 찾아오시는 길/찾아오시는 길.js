// 2026-02-26
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [a, b] = input[0].split(" ").map(v => Number(v));
let [c, d] = input[1].split(" ").map(v => Number(v));
let answer = a + c == b + d ? "Either" : a + c < b + d ? "Hanyang Univ." : "Yongdap";
console.log(answer);