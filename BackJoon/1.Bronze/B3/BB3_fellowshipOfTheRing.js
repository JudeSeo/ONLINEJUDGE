// 2022-09-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let [w, n, p] = input[0].split(" ").map(v => Number(v))
input[1].split(" ").map(v => Number(v)).forEach(v => {
    if (v >= w && v <= n) answer++;
    answer.push
})
console.log(answer);