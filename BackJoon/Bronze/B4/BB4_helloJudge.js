// 2023-06-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    answer.push(`Hello World, Judge ${i}!`)
}
console.log(answer.join("\n"))