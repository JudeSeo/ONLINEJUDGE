// 2022-09-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('����.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input = input.slice(1);
input.forEach(v => {
    if (v % 2 == 0)
        answer.push(`${v} is even`);
    else
        answer.push(`${v} is odd`)
});
console.log(answer.join("\n"));