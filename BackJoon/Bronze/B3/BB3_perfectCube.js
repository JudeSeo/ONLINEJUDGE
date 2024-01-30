// 2023-09-16
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val));
    answer.push(`Case #${i + 1}: ${Math.ceil(Math.cbrt(temp[1])) - Math.ceil(Math.cbrt(temp[0]))}`);
})
console.log(answer.join("\n"));