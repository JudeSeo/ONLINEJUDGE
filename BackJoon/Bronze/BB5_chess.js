// 2022-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let standard = [1, 1, 2, 2, 2, 8];
let answer = [];
input.forEach((v, i) => {
    answer.push(standard[i] - v)
})
console.log(answer.join(" "));
