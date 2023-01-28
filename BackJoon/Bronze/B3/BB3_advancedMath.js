// 2023-01-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[0] ** 2 + temp[1] ** 2 == temp[2] ** 2)
        answer.push(`Scenario #${i + 1}:\nyes`);
    else
        answer.push(`Scenario #${i + 1}:\nno`);
})
console.log(answer.join("\n\n"))