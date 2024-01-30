// 2023-08-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let h = temp[0] / temp[1] * 2
    answer.push(`The height of the triangle is ${h.toFixed(2)} units`)
})
console.log(answer.join("\n"))