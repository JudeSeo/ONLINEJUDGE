// 2024-05-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("");
let answer = [];
while (input.length) {
    let num = input.splice(Math.max(0, input.length - 3));
    answer.push(parseInt(num.join(""), 2).toString(8));
}
console.log(answer.reverse().join(""));
