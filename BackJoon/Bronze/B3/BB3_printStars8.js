// 2022-03-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    answer[i] = "*".repeat(i);
    answer[i] += " ".repeat(2 * (input - i));
    answer[i] += "*".repeat(i);
    if (i != input) {
        answer[(input) * 2 - i] = "*".repeat(i);
        answer[(input) * 2 - i] += " ".repeat(2 * (input - i));
        answer[(input) * 2 - i] += "*".repeat(i);
    }
}
answer = answer.slice(1);
console.log(answer.join("\n"));