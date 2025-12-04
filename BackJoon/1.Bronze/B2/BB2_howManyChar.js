// 2024-03-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "#") return;
    let temp = Array.from(new Set(v.toLowerCase().replace(/[^a-z]/g, "").split("").sort()));
    answer.push(temp.length);
})
console.log(answer.join("\n"));