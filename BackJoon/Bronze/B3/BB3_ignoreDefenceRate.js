// 2023-03-24
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)[0].split(" ").map(v => Number(v) * 0.01);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1)[0].split(" ").map(v => Number(v) * 0.01);
let answer = [];
let defence = 0 * 0.01;
input.forEach(v => {
    defence = (1 - (1 - defence) * (1 - v));
    answer.push((defence * 100).toFixed(6))
})
console.log(answer.join("\n"))