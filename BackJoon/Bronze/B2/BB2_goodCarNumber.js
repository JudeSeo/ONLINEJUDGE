// 2024-02-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("-");
    let front = temp[0].split("");
    let frontNum = (front[0].charCodeAt() - 65) * (26 ** 2) + (front[1].charCodeAt() - 65) * 26 + (front[2].charCodeAt() - 65);
    answer.push(Math.abs(frontNum - temp[1]) > 100 ? "not nice" : "nice");
})
console.log(answer.join("\n"));