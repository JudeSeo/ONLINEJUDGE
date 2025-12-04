// 2023-11-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
input.push(...new Array(5).fill(0));
input = input.slice(0, 5);
let answer = 0;
if (input[0] > input[2]) {
    answer += (input[0] - input[2]) * 508;
} else {
    answer += (input[2] - input[0]) * 108;
}
if (input[1] > input[3]) {
    answer += (input[1] - input[3]) * 212;
} else {
    answer += (input[3] - input[1]) * 305;
}
answer += input[4] * 707;
answer *= 4763;
console.log(answer);