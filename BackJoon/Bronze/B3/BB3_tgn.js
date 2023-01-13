// 2023-01-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let profit = temp[0] - (temp[1] - temp[2])
    if (profit < 0) answer.push("advertise")
    else if (profit > 0) answer.push("do not advertise")
    else answer.push("does not matter")
})
console.log(answer.join("\n"))