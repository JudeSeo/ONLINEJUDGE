// 2023-04-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    let before = Math.floor(Math.pow(temp[0], (1 / temp[1])));
    let after = Math.ceil(Math.pow(temp[0], (1 / temp[1])));
    (temp[0] - before ** temp[1]) > (after ** temp[1]) - temp[0] ? answer.push(after) : answer.push(before)
})
console.log(answer.join("\n"))