// 2023-12-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("");
let answer = [];
while (input.length % 3 != 0) {
    input = ['0', ...input];
}
while (input.length > 0) {
    let temp = input.splice(input.length - 3).join("");
    let num = parseInt(temp, 2).toString(8);
    answer.push(num);
}
console.log(answer.reverse().join(""));
