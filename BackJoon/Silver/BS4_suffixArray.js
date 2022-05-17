// 2022-05-17
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 0; i < input.length; i++) {
    answer.push(input.slice(i));
}
answer.sort();
console.log(answer.join("\n"));