// 2023-07-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val))
    temp[0] += Math.floor(temp[1] / 4);
    temp[0] -= Math.floor(temp[1] / 7);
    answer.push(temp[0]);
})
console.log(answer.join("\n"))