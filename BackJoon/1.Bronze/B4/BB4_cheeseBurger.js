// 2023-11-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0;
if (input[0] > input[1]) {
    answer = input[1] * 2 + 1;
} else {
    answer = input[0] * 2 - 1;
}
console.log(answer);
