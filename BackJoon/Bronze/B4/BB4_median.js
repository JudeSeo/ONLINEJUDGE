// 2023-06-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    if (v == "0") return;
    let [n, ...temp] = v.split(" ").map(val => Number(val));
    if (n % 2 == 1) answer.push(`Case ${i + 1}: ${(temp[(n - 1) / 2]).toFixed(1)}`);
    else {
        answer.push(`Case ${i + 1}: ${((temp[(n / 2) - 1] + temp[n / 2]) / 2).toFixed(1)}`);
    }
})
console.log(answer.join("\n"))