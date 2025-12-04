// 2022-07-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let biggest = input[1] * 1.75;
let medium = input[1] * 3.5;
let answer = input[1] * 7;
if (answer > input[0])
    answer = medium;
if (answer > input[0])
    answer = biggest;
if (answer > input[0])
    answer = 0;
console.log(answer * 1000);