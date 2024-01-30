// 2023-03-09
let fs = require('fs');
// let [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [num, input] = fs.readFileSync("예제.txt").toString().trim().split('\r\n')
let first = input.split("").splice(0, num / 2).join("");
let second = input.split("").splice(num / 2).join("");
let answer = first == second ? "Yes" : "No";
console.log(answer)
