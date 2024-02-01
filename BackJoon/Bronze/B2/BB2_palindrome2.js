// 2024-01-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.trim().toLowerCase());
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => v.trim().toLowerCase());
let answer = [];
input.forEach(v => {
    let temp = v.split("").reverse().join("");
    if (v == temp) answer.push("true");
    else answer.push("false");
})
console.log(answer.join("\n"));