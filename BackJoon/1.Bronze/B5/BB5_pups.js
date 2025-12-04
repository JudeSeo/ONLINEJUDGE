// 2023-05-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer.push("$" + (temp[0] * temp[1] * temp[2]).toFixed(2));
})
console.log(answer.join("\n"))