// 2025-03-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v))[0];
let arr = [0, 3];
for (let i = 2; i <= input; i++) {
    arr[i] = arr[i-1] + arr[i-1] - 1
}
let answer = arr[input] ** 2;
console.log(answer);
