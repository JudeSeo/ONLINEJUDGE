// 2023-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    answer.push("$" + (v * 0.8).toFixed(2))
})
console.log(answer.join("\n"));
