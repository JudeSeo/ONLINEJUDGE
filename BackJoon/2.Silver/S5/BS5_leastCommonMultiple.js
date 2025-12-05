// 2025-12-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => BigInt(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n')[0].split(" ").map(v => BigInt(v));
let a = input[0];
let b = input[1];
while (a != 0n && b != 0n) {
    if (a > b)
        a = a % b;
    else
        b = b % a
}
let greatest = a + b;
let answer = (input[0] / greatest) * input[1];
console.log(answer.toString());
