// 2024-05-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = [];
input.sort((a, b) => a - b);
let greatest = input[1] - input[0];
for (let i = 2; i < input.length; i++) {
    let a = input[i] - input[i - 1];
    let b = greatest;
    while (a != 0 && b != 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    greatest = a + b;
}
answer.push(greatest);

for (let i = 2; i <= Math.sqrt(greatest); i++) {
    if (greatest == i * i) answer.push(i)
    else if (greatest % i == 0) {
        answer.push(i);
        answer.push(greatest / i);
    }
}
answer.sort((a, b) => b - a);
console.log(answer[0]);