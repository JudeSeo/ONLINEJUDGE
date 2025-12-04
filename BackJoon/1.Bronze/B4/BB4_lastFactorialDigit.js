// 2024-08-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
let fac = [1];
for (let i = 1; i <= 10; i++) {
    fac[i] = fac[i - 1] * i;
}
input.forEach(v => {
    answer.push(fac[v].toString().slice(-1));
})
console.log(answer.join("\n"));