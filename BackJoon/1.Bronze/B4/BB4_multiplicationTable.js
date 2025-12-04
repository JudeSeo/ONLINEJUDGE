// 2025-03-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
input = Number(input);
let answer = 1;
if (input > 10) {
    for (let i = 2; i <= 9; i++) {
        if (input % i == 0) {
            answer = 1;
            if (input / i > 9) answer = 0;
            else break;
        } else answer = 0;
    }
}
console.log(answer);
