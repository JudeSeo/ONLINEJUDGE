// 2023-03-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let sum = 0
input.forEach(v => {
    if (v == "0") return;
    let sum = 0;
    for (let i = 1; i <= v; i++) {
        sum += i
    }
    answer.push(sum)
})
console.log(answer.join("\n"))