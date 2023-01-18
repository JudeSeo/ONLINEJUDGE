// 2023-01-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
for (let i = 0; i < input.length - 2; i++) {
    answer.push((input[i + 1] - input[i]).toFixed(2))
}
console.log(answer.join("\n"))