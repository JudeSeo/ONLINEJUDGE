// 2024-01-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.trim().toLowerCase());
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => v.trim().toLowerCase());
let answer = [];
input.forEach(v => {
    let temp = v.split("").reverse().join("");
    if (v == temp) answer.push("Yes");
    else answer.push("No");
})
console.log(answer.join("\n"));