// 2025-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
let max = Math.max(...input);
let arr = [1, 1];
for (let i = 2; i <= max; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
input.forEach(v => {
    answer.push(arr[v]);
})
console.log(answer.join("\n"));
