// 2024-06-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [0];
for (let i = 1; i <= input[0]; i++) {
    if (input[0] % i == 0) answer.push(i);
}
console.log(answer[input[1]] ?? 0);
