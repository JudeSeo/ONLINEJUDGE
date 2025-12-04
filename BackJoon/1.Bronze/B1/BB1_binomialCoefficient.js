// 2022-04-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let n = input[0];
let k = input[1];
let sum = 1;

for (let i = 1; i <= k; i++) {
    sum *= ((n - i + 1) / i);
}
console.log(sum);