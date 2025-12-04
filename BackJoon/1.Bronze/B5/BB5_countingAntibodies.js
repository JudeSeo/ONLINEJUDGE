// 2022-06-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let a = input[0].split(" ");
let b = input[1].split(" ");
let c = input[2].split(" ");
let answer = (a[0] * a[1] + b[0] * b[1]) * (c[0] * c[1] * c[2]);
console.log(answer);
