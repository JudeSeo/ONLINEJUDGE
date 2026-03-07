// 2026-03-07
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.split(" ").map(val => Number(val))).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
// let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1).map(v => v.split(" ").map(val => Number(val))).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let answer = 1;
let endTime = input[0][1];
for (let i = 1; i < input.length; i++) {
    if (input[i][0] < endTime) continue;
    else {
        answer++;
        endTime = input[i][1];
    }
}
console.log(answer);