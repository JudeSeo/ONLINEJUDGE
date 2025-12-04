// 2024-08-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => BigInt(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => BigInt(v));
let answer = [];
input.forEach(v => {
    if (v == 0n) return;
    if (v % 42n == 0) answer.push("PREMIADO");
    else answer.push("TENTE NOVAMENTE");
})
console.log(answer.join("\n"));