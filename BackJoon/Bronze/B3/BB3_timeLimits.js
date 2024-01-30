// 2022-09-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let s = Number(input[0].split(" ")[1]);
input = input.slice(1)[0].split(" ").map(v => Number(v));
let max = Math.max(...input);
let answer = Math.ceil(max*s/1000)
console.log(answer);