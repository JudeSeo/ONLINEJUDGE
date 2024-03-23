// 2024-03-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
let dp = new Array(1000000).fill(0)
for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 == 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 == 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
console.log(dp[input]);