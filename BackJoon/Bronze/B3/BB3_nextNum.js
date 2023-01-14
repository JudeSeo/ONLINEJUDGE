// 2023-01-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    if (temp[2] - temp[1] == temp[1] - temp[0])
        answer.push(`AP ${temp[2] * 2 - temp[1]}`)
    else if (temp[2] / temp[1] == temp[1] / temp[0])
        answer.push(`GP ${temp[2] ** 2 / temp[1]}`)
})
console.log(answer.join("\n"))