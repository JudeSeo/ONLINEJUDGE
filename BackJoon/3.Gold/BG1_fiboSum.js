// 2022-04-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
input.sort((a, b) => (a - b))
let max = Number(input[1])+2;
let answer = [0, 1];
for (let i = 2; i <= max; i++) {
    answer[i] = ((BigInt(answer[i - 1]) + BigInt(answer[i - 2])) % 1000000000n);
}
let sum = 0n;
sum = answer[Number(input[1]) + 2] - answer[Number(input[0]) + 1];
console.log(sum.toString());

// 메모리초과 떳다....