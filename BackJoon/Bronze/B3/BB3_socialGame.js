// 2023-02-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = 0, weekMax = input[0] * 7 + input[1];
answer = Math.floor(input[2] / weekMax) * 7 + Math.min(Math.ceil((input[2] % weekMax) / input[0]), 7)
console.log(answer)

// 왜 마지막에 7과의 최솟값을 더하는 건지 모르겠다.
