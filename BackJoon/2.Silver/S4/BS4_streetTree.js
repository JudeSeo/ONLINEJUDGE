// 2025-12-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => BigInt(v));
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').slice(1).map(v => BigInt(v));
let difference = 0n;
for (let i = 0; i < input.length - 2; i++) {
    let a = input[i + 1] - input[i];
    let b = input[i + 2] - input[i + 1];
    let greatest = gcd(a, b);
    if (difference == 0n) difference = greatest;
    else difference = gcd(greatest, difference);
}
let answer = 0n;
let tree = input[0];
for (let i = 0; i < input.length - 1; i++) {
    answer += (((input[i + 1] - input[i]) / difference) - 1n);
}
console.log(answer.toString());

function gcd(a, b) {
    while (a != 0n && b != 0n) {
        if (a > b)
            a = a % b;
        else
            b = b % a
    }
    return a + b;
}
