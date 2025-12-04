// 2022-08-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
const num = input[0];
input = input.slice(1);
for (let i = 1; i <= num; i++) {
    answer.push(input.indexOf(i) + 1)
}
console.log(answer.join("\n"));