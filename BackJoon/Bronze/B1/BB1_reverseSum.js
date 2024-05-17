// 2024-05-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let answer = Number((Number(input[0].split("").reverse().join("")) + Number(input[1].split("").reverse().join(""))).toString().split("").reverse().join(""))
console.log(answer);
