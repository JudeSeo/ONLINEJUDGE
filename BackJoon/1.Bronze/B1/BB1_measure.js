// 2024-03-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").sort((a, b) => a - b);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[1].split(" ").sort((a, b) => a - b);
let answer = input[0] * input[input.length - 1];
console.log(answer);
