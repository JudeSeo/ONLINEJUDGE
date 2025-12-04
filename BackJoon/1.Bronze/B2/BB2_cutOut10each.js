// 2022-03-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
while (input.length > 0) {
    answer.push(input.slice(0, 10));
    input = input.slice(10);
}
console.log(answer.join("\n"))
