// 2023-04-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer.push(`${((temp[0] - 1) / temp[1] * 60).toFixed(4)} ${((temp[0]) / temp[1] * 60).toFixed(4)} ${((temp[0] + 1) / temp[1] * 60).toFixed(4)}`)
});
console.log(answer.join("\n"))