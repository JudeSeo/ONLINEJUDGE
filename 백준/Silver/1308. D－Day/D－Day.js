// 2026-03-05
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let [y1, m1, d1] = input[0].split(" ").map(v => Number(v));
let [y2, m2, d2] = input[1].split(" ").map(v => Number(v));
let answer = "D-";
if (y2 - y1 > 1000) answer = "gg";
else if (y2 - y1 == 1000) {
    if (m2 > m1) answer = "gg";
    else if (m2 == m1 && d2 >= d1) answer = "gg";
    else answer += getDiffDate();
} else
    answer += getDiffDate();
console.log(answer);

function getDiffDate() {
    let future = new Date(y2, m2-1, d2);
    let today = new Date(y1, m1-1, d1);
    let diff = Math.abs(future.getTime() - today.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
}