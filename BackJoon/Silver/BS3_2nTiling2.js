// 2022-06-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
input = Number(input);
let answer = [1n, 1n];
for (let i = 0; i <= (input + 1); i++) {
    answer.push(((2n * answer[i]) + answer[i + 1]) % 10007n);
}
console.log(answer[input].toString());
