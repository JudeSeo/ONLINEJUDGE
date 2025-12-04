// 2023-02-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => BigInt(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1).map(v => BigInt(v));
let answerList = ['A', 'B', 'C', 'B', 'C', 'D', 'C', 'D', 'A', 'D', 'A', 'B']
let answer = [];
input.forEach(v => {
    answer.push(answerList[(v - 1) % 12]);
})
console.log(answer.join("\n"));
