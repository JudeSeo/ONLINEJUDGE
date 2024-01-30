// 2023-02-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = Math.min(input[0] + input[2], input[1] + input[2], input[0] + input[1] + input[2] >> 1) * 2
console.log(answer);

// 내가 푼건 아니지만 시프트연산을 사용해서 신기했다.