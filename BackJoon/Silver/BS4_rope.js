// 2022-05-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1.map(v=>Number(v)));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1).map(v => Number(v));
// input.sort((a, b) => b - a)
var answer = [];
let sum = 0;
for (let i = 0; i < input.length; i++) {
    let temp = input.map(v => v * (i + 1));
    temp.sort((a, b) => b - a);
    if (temp[i] > input[input.length - i - 1])
        answer.push(Math.max(...temp))
}


console.log(Math.max(...answer))

// 머리가 안돌아간다....


// 반례 답 32
// 4
// 30
// 10
// 9
// 8