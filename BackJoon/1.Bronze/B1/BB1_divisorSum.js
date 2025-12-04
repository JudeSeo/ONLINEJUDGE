// 2025-12-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("../../../test.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v == "-1") return;
    let sum = 0;
    let divisor = [];
    for (let i = 1; i < v; i++) {
        if (v % i == 0) {
            divisor.push(i);
            sum += i;
        }
    }
    if (sum == v) answer.push(v + " = " + divisor.join(" + "));
    else answer.push(v + " is NOT perfect.")
})
console.log(answer.join("\n"));
