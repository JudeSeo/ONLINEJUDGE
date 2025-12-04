// 2022-12-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0n;
switch (input[1]) {
    case "+":
        answer = BigInt(input[0]) + BigInt(input[2])
        break;
    case "*":
        answer = BigInt(input[0]) * BigInt(input[2])
        break;
}
console.log(answer.toString())