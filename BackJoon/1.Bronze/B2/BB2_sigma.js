// 2024-02-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>BigInt(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => BigInt(v));
let answer = 0n;
if (input[0] <= input[1])
    answer = ((input[0] + input[1]) * (input[1] - input[0] + 1n)) / 2n;
else
    answer = ((input[1] + input[0]) * (input[0] - input[1] + 1n)) / 2n;
console.log(answer.toString());