// 2024-08-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    let curr = v.toString().slice(-2);
    let next = v + 1;
    if (next % curr == 0) answer.push("Good");
    else answer.push("Bye");
})
console.log(answer.join("\n"));