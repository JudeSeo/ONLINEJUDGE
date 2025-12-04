// 2022-09-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let num = Math.ceil(Number(input.splice(0, 1)) / 2);
input = input[0].split("");
for (let i = 0; i < num; i++) {
    if (input[i] != input[input.length - i - 1])
        answer++;
}
console.log(answer);