// 2025-03-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let answer = [];
let arr = [1, 1];
for (let i = 2; i <= 40; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
answer.push(arr[input-1]);
answer.push(input-2);
console.log(answer.join(" "));
