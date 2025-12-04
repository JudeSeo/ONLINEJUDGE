// 2023-01-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] >= temp[1])
        answer.push("MMM BRAINS");
    else
        answer.push("NO BRAINS");
})
console.log(answer.join("\n"))