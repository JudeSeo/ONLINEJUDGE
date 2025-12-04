// 2023-01-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "***") return;
    answer.push(v.split("").reverse().join(""));
})
console.log(answer.join("\n"));
