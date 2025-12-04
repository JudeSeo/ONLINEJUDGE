// 2025-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let arr = [1, 1];
let max = 40;
for (let i = 2; i <= max; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
let answer = arr[input]
console.log(answer);
