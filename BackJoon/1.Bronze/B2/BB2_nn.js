// 2024-01-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(Number);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(Number);
let answer = "";
for (let i = 0; i < input[0]; i++) {
    answer += input[0];
}
console.log(answer.slice(0, Math.min(input[1], answer.length)));