// 2023-11-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let factorials = {};
for (let i = 1; i <= 5; i++) {
    let fac = 1;
    for (let j = 1; j <= i; j++) {
        fac *= j;
    }
    factorials[i] = fac;
}
input.forEach(v => {
    if (v == '0') return;
    let temp = v.split("").map(val => Number(val));
    let sum = 0;
    temp.forEach((val, index) => {
        sum += (factorials[temp.length - index] * val);
    })
    answer.push(sum);
})
console.log(answer.join("\n"));