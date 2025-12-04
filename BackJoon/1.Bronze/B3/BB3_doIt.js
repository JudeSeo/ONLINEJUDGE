// 2023-01-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("")
    answer.push(temp[(temp.length / 2)] == temp[(temp.length / 2) - 1] ? "Do-it" : "Do-it-Not")
})
console.log(answer.join("\n"));
