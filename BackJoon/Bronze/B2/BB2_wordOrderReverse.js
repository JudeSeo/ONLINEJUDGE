// 2024-01-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").reverse();
    answer.push(`Case #${i + 1}: ${temp.join(" ")}`);
})
console.log(answer.join("\n"));