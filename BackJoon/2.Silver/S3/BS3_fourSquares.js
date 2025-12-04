// 2024-03-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
// let n = Math.floor(Math.sqrt(input));
const dp = new Array(Number(input) + 1).fill(0);
dp[1] = 1;
for (let i = 2; i <= input; i++) {
    let min = 4;
    for (let j = 1; j * j <= i; j++) {
        min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
}
console.log(dp[input]);