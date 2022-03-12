// 2022-03-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    answer[i] = " ".repeat(input - i);
    answer[i] += "*".repeat(i * 2 - 1);
    if (i != input) {
        answer[(input) * 2 - i] = " ".repeat(input - i);
        answer[(input) * 2 - i] += "*".repeat(i * 2 - 1);
    }
}
answer = answer.slice(1);
console.log(answer.join("\n"));