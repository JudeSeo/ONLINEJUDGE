// 2025-03-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v))[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v))[0];
let date = new Date(2024, 7, 1);
for (let i = 1; i < input; i++) {
    let year = date.getFullYear();
    let month = date.getMonth() + 7;
    if (month > 11) {
        year += 1;
        month -= 12;
    }
    date = new Date(year, month, 1);
}
let answer = [date.getFullYear(), date.getMonth() + 1];
console.log(answer.join(" "));
