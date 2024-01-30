// 2022-07-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = 0;
if (input[0] < 0) {
    answer = (-1 * input[0]) * input[2] + input[3] + input[1] * input[4]
} else {
    answer = (input[1] - input[0]) * input[4]
}
console.log(answer);