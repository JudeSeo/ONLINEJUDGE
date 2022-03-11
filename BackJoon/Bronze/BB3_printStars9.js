// 2022-03-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 0; i < input; i++) {
    answer[i] = " ".repeat(i);
    answer[i] += "*".repeat((input - i) * 2 - 1);
    if (i != input - 1) {
        answer[(input - 1) * 2 - i] = " ".repeat(i);
        answer[(input - 1) * 2 - i] += "*".repeat((input - i) * 2 - 1);
    }
}
console.log(answer.join("\n"));