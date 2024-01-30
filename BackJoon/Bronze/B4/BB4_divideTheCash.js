// 2023-06-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [n, price] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let sum = 0;
input.map(v => sum += Number(v));
let eachPrice = price / sum;
input.forEach(v => {
    answer.push(v * eachPrice);
})
console.log(answer.join("\n"));