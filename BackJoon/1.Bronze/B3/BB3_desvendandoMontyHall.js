// 2022-09-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
input = input.slice(1);
input.forEach(v => {
    if (v !== 1)
        answer++;
})
console.log(answer);