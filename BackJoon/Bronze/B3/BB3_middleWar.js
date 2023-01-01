// 2023-01-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let num = input.splice(0, 1);
let gan = [1n, 2n, 3n, 3n, 4n, 10n];
let sau = [1n, 2n, 2n, 2n, 3n, 5n, 10n];
for (let i = 0; i < num; i++) {
    let good = 0n, evil = 0n;
    input[i * 2].split(" ").forEach((v, i) => good += BigInt(v) * gan[i]);
    input[i * 2 + 1].split(" ").forEach((v, i) => evil += BigInt(v) * sau[i]);
    if (evil > good)
        answer.push(`Battle ${i + 1}: Evil eradicates all trace of Good`)
    else if (evil < good)
        answer.push(`Battle ${i + 1}: Good triumphs over Evil`)
    else
        answer.push(`Battle ${i + 1}: No victor on this battle field`)
}
console.log(answer.join("\n"))