// 2024-03-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n').slice(1);
const stairs = input.map(v => +v);
let dp = [[0, 0], [stairs[0], stairs[0]]];
for (let i = 2; i <= stairs.length; i++) {
    dp.push([]);
    dp[i][0] = Math.max(dp[i - 2][1], dp[i - 2][0]) + stairs[i - 1];
    dp[i][1] = dp[i - 1][0] + stairs[i - 1];
}
console.log(Math.max(...dp[dp.length - 1]));
