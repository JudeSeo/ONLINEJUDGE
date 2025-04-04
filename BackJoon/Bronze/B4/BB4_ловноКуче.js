// 2025-04-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let [n, m, k] = input;
let answer = 0;
let i = n + m;
while (true) {
    i -= k;
    ++answer;
    if (i <= 0) break;
    i += m;
}
console.log(answer);
