// 2022-06-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let arr = [];
let eggs = Number(input[0].split(" ")[0]);
input = input.slice(1).sort((a, b) => b - a).map(v => Number(v));
input.forEach((v, i) => {
    arr.push(v * (i + 1));
});
arr = arr.slice(0, eggs)
let max = Math.max(...arr);
answer.push(input[arr.indexOf(max)]);
answer.push(max)
console.log(answer.join(" "));
