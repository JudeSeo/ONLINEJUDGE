// 2023-01-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>BigInt(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => BigInt(v));
let answer = [];
input.forEach(v => {
    if (v % 2n == 0n) answer.push("even");
    else answer.push("odd");
})
console.log(answer.join("\n"))