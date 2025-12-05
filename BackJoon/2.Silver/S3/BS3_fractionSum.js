// 2025-12-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n');
let answer = [];
let [a, b] = input[0].split(" ").map(v => Number(v));
let [c, d] = input[1].split(" ").map(v => Number(v));
let i = 2;
let son = a * d + b * c
let mom = b * d;
while (i <= son) {
    if (son % i == 0 && mom % i == 0) {
        son /= i;
        mom /= i;
    } else i++;
}
answer.push(son);
answer.push(mom)
console.log(answer.join(" "));
