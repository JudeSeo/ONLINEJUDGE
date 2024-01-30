// 2022-06-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [(Number(input) + 1) * 2, (Number(input) + 1) * 3];
console.log(answer.join(" "));
