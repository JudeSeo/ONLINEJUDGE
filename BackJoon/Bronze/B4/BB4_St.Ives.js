// 2022-08-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v == 0)
        return;
    let temp = 0;
    temp += v ** 4 + v ** 3 + v ** 2 + v ** 1 + 1;
    answer.push(temp.toFixed(2));
})
console.log(answer.join("\n"));