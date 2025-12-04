// 2022-08-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(BigInt);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ").map(BigInt);
let answer = 0;
if (input[0] % 2n != 0 && input[1] % 2n != 0)
    answer = input[0] > input[1] ? input[1] : input[0];

console.log(answer.toString());