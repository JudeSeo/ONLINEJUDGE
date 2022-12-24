// 2022-12-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let seven = input[0].split(" ").map(v => Number(v));
input = input.slice(2);
let answer = 1000 / seven[1] * seven[0]
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer = Math.min(answer, 1000 / temp[1] * temp[0]);
})
console.log(answer.toFixed(2));