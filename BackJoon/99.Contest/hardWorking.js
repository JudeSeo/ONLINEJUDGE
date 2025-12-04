// 2024-05-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n');
let [n, m, k] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
input = input.map(v => Number(v));
let arr = [];
input.forEach(v => {
    while (v > k) {
        arr.push(v);
        v -= m;
    }
})
arr.sort((a, b) => b - a)
let answer = [];
let satis = 0
arr.forEach(v => {
    satis = Math.floor(satis / 2) + v;
    answer.push(satis);
})
console.log(answer.length);
console.log(answer.join("\n"));
