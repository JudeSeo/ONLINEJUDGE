// 2023-01-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    let result1 = temp[0] / temp[1];
    let result2 = temp[1] / temp[0];
    if (result1 > 1 && parseInt(result1) == result1) answer.push("multiple")
    else if (result2 > 1 && parseInt(result2) == result2) answer.push("factor")
    else answer.push("neither");
})
console.log(answer.join("\n"));
