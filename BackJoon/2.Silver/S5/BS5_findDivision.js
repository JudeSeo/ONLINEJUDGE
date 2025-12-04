// 2025-12-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../test.txt").toString().trim().split('\r\n')[0];
let answer = "";
if (input == 1) answer = "1/1";
let sum = [0];
let i = 1
for (; ; i++) {
    sum[i] = sum[i - 1] + i;
    if (sum[i - 1] + i >= input) break;
}
let a = 0
for (let j = sum[i - 1]; j < input; j++) {
    if (i % 2 == 0) {
        answer = Number(a + 1) + "/" + Number(i - a);
    } else {
        answer = Number(i - a) + "/" + Number(a + 1);
    }
    a++;
}
console.log(answer)
