// 2024-01-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = "Good";
let temp = input.slice(0).sort((a, b) => a - b);
if (JSON.stringify(input) != JSON.stringify(temp)) answer = "Bad";
console.log(answer);
