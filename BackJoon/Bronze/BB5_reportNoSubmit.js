// 2022-06-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
let answer = []
input.sort((a, b) => a - b)
for (let i = 1; i <= 30; i++) {
    if (!input.includes(i))
        answer.push(i);
}
console.log(answer.join("\n"));
