// 2025-03-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').slice(1);
let answer = "";
let a = input[0].split(" ").sort();
let b = input[1].split(" ").sort();
for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
        answer = a[i];
        break;
    }
}
console.log(answer);
