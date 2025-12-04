// 2022-05-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let n = Number(input[0]);
let k = Number(input[1]);
let sum = new Array((n+1));
for (let i = 0; i <= n; i++) {
    sum[i] = new Array(n+1);
    sum[i].fill(0);
}

for (let i = 1; i <= n; i++) {
    for (let p = 0; p <= i; p++) {
        if (i == p || p == 0) {
            sum[i][p] = 1;
        } else {
            sum[i][p] = (sum[i - 1][p - 1] + sum[i - 1][p]) % 10007;
        }
    }
}


console.log(sum[n][k]);

// 겁나 복잡하네... 이해하기 어려움...