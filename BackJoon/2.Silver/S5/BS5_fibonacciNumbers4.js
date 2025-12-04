// 2025-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let arr = [0n, 1n, 1n];
for (let i = 2; i <= input; i++) {
    arr[i + 1] = arr[i] + arr[i - 1];
}
let answer = arr[input]
console.log(answer.toString());
