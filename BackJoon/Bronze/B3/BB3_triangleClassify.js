// 2023-03-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(v => Number(v)).sort((a, b) => b-a);
    if (temp[0] >= (temp[1] + temp[2])) answer.push(`Case #${i + 1}: invalid!`);
    else if (temp[0] == temp[2]) answer.push(`Case #${i + 1}: equilateral`);
    else if (temp[0] == temp[1] || temp[1] == temp[2]) answer.push(`Case #${i + 1}: isosceles`);
    else answer.push(`Case #${i + 1}: scalene`);
})
console.log(answer.join("\n"));
