// 2024-08-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input.splice(0, 1)[0];
let food = input.splice(0, num).map(v => Number(v));
num = input.splice(0, 1)[0];
let answer = 0;
input.forEach(v => {
    answer += food[v - 1];
})
console.log(answer);