// 2023-06-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] == 0 || temp[1] == 0) answer.push("AXIS");
    else if (temp[0] > 0) {
        if (temp[1] > 0) answer.push("Q1");
        else answer.push("Q4");
    } else if (temp[0] < 0) {
        if (temp[1] > 0) answer.push("Q2");
        else answer.push("Q3");
    }
})
console.log(answer.join("\n"))
