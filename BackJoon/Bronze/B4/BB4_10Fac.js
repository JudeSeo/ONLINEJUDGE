// 2023-07-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let facSum = 1;
for (let i = 1; i <= input; i++) {
    facSum *= i
}
let answer = facSum / (60 * 60 * 24 * 7);
console.log(answer);
