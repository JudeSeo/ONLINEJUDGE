// 2022-07-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [a, b] = input[0].split(" ");
let people = a*b
input = input.slice(1)[0].split(" ").map(v => Number(v));
let answer = input.map(v => {return v - people})
console.log(answer.join(" "));
