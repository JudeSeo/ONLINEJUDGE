// 2022-07-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let first = input.slice(0, 3);
let answer = first == "555" ? "YES" : "NO";
console.log(answer);
