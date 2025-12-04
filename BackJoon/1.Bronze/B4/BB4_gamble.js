// 2022-07-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
input.forEach(v => {
    if (v == -1)
        return;
    answer += v;
})
console.log(answer);