// 2022-08-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
for (let i = 1; i <= input[0]; i++) {
    if (input % i == 0)
        answer += i;
}
console.log(answer);