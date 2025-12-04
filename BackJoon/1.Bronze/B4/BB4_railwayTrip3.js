// 2025-03-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let [p, q] = input[0].split(" ").map(v => Number(v));
let [a, b] = input[1].split(" ").map(v => Number(v));
let answer;
if (p >= q) {
    answer = q * a;
} else {
    answer = p * a;
    answer += ((q - p) * b);
}
console.log(answer);
