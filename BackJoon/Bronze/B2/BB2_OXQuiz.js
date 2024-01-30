// 2022-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let length = input[0];
let answer = [];
input = input.slice(1);
input.forEach((v, i) => {
    let score = 0;
    let sum = 0;
    for (let i = 0; i < v.length; i++) {
        if (v.charAt(i) == 'O')
            score++
        else
            score = 0;
        sum += score;
    }
    answer.push(sum);
});

console.log(answer.join("\n"));