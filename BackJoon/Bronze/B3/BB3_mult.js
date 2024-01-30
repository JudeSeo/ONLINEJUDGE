// 2023-03-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
let num = input[0];
for (let i = 1; i < input.length; i++) {
    if (input[i] % num == 0) {
        answer.push(input[i])
        i++;
        num = input[i];
    }
}
console.log(answer.join("\n"))
