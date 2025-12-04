// 2022-12-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let sum = 0;
    v.split(" ").map(val => sum += Number(val))
    answer.push(sum)
})
console.log(answer.join("\n"))