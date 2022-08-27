// 2022-08-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1)[0].split(" ").map(v=>Number(v))
let total = 0
let score = 0;
input.forEach(v => {
    if (v != -1) {
        total++;
        score += v
    }
})
answer = (score/total)
console.log(answer);