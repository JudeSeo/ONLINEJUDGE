// 2022-12-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let num = input.splice(0, 1);
for (let i = 0; i < num; i++) {
    answer.push(`Case ${i + 1}: ${input[2 * i + 1]}, ${input[2 * i]}`)
}
console.log(answer.join("\n"))