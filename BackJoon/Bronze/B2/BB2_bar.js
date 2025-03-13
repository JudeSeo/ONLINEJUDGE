// 2025-03-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = 0;
let max = 0;
input.reverse().forEach(v => {
    if (v > max) {
        max = v;
        answer++;
    }
})
console.log(answer);
