// 2022-03-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ");
let answer = Array.from(new Set(input)).sort((a, b) => (a - b));
console.log(answer.join(" "));