// 2022-02-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let len = parseInt(input[0]);
let a = input[1].split(" ")
let b = input[2].split(" ")
a.sort((a, b) => (a - b));
b.sort((a, b) => (b - a));
let answer = 0;
for (let i = 0; i < len; i++) {
    answer += (parseInt(a[i]) * parseInt(b[i]));
}
console.log(answer);