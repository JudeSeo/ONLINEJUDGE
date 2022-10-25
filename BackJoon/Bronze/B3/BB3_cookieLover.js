// 2022-10-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val))
    answer.push(Math.ceil(temp[0] / temp[1]))
})
console.log(answer.join("\n"))