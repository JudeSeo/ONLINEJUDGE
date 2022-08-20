// 2022-08-16
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [x, y] = input[0].split(" ").map(v => Number(v))
let r = Number(input[1]);
let answer = [];
answer.push(`${x - r} ${y + r}`)
answer.push(`${x + r} ${y + r}`)
answer.push(`${x + r} ${y - r}`)
answer.push(`${x - r} ${y - r}`)

console.log(answer.join("\n"));