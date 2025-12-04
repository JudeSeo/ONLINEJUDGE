// 2022-05-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let num = parseInt(input)
let answer = [];
for (let i = 2; i <= input; i++) {
    while (num % i == 0) {
        num /= i;
        answer.push(i);
    }
    if (num == 1)
        break;
}

console.log(answer.join("\n"));