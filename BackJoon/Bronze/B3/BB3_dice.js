// 2022-12-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => a - b);
    if (temp[0] == temp[2])
        answer.push(10000 + 1000 * temp[0]);
    else if (temp[0] == temp[1] || temp[1] == temp[2])
        answer.push(1000 + 100 * temp[1]);
    else
        answer.push(100 * temp[2]);
})
console.log(Math.max(...answer))