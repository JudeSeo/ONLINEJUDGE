// 2022-03-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    answer[i] = "*".repeat(i);
    if (i != input) {
        answer[(input) * 2 - i] = "*".repeat(i);
    }
}
answer = answer.slice(1);
console.log(answer.join("\n"));