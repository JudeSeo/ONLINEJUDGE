// 2024-01-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[3] - temp[1] >= 4) answer.push("KIN");
    else answer.push(temp[1] + temp[2] + temp[3]);
})
console.log(answer.join("\n"));