// 2024-07-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [a, b] = input[0].split(" ").map(v => Number(v));
let [k, x] = input[1].split(" ").map(v => Number(v));
let min = Math.max(k - x, a);
let max = Math.min(k + x, b);
let answer = max - min + 1;
console.log(answer <= 0 ? "IMPOSSIBLE" : answer);