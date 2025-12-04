// 2023-04-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');`
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    let doll = temp[0] - temp[1];
    if (doll <= 1) answer.push("0 0");
    else if (doll % 2 == 1) answer.push(`${Math.floor(doll / 2) - 1} 1`);
    else answer.push(`${doll / 2} 0`)
})
console.log(answer.join("\n"))