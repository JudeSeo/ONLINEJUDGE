// 2022-03-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = input; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        answer.push("*");
    }
    i == 1 ? "" : answer.push("\n");
}

console.log(answer.join(""));