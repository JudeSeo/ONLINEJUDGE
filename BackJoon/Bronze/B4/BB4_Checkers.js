// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(BigInt);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(BigInt);
let answer = input[0] < input[1] ? input[0] + 1n : input[1];
console.log(answer.toString());
