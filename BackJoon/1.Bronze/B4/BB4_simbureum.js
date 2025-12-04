// 2022-07-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v=>Number(v));
let answer = 0;
input.forEach(v => {
    answer += v
})
console.log(parseInt(answer/60)+"\n"+answer%60);