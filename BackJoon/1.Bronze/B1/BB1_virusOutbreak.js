// 2025-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = [];
let arr = [1n, 1n];
let max = Math.max(...input);
for (let i = 2; i <= max; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
input.forEach(v => {
    if (v == -1) return;
    answer.push(`Hour ${v}: ${arr[v - 1].toString()} cow(s) affected`);
})
console.log(answer.join("\n"));
