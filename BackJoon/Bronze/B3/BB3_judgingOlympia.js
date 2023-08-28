// 2023-08-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0 0 0 0") return;
    let sum = 0;
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b).slice(1, 5).map(val => sum += val)
    answer.push(sum / 4);
})
console.log(answer.join("\n"))