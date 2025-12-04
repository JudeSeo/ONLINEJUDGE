// 2023-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
let price = [
    350.34,
    230.90,
    190.55,
    125.30,
    180.90,
]
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let sum = 0;
    temp.forEach((val, i) =>
        sum += val * price[i]);
    answer.push(`$${sum.toFixed(2)}`)
})
console.log(answer.join("\n"));
