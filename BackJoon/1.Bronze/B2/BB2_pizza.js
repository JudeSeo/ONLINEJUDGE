// 2024-01-16
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v == "0") return;
    let temp = v.split(" ");
    if (temp[0] * 2 < Math.sqrt(temp[1] ** 2 + temp[2] ** 2)) answer.push(`Pizza ${i + 1} does not fit on the table.`);
    else answer.push(`Pizza ${i + 1} fits on the table.`);
})
console.log(answer.join("\n"));