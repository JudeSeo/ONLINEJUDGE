// 2022-03-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    for (let k = input; k > i; k--) {
        answer.push(" ");
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        answer.push("*");
    }
    i == input ? "" : answer.push("\n");
}

console.log(answer.join(""));