// 2023-02-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let carry = 0, sum = 0;
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => b - a);
    while (temp[0] > 0) {
        sum += temp[0] % 10 + temp[1] % 10;
        if (sum >= 10) carry++;
        temp[0] = parseInt(temp[0] / 10);
        temp[1] = parseInt(temp[1] / 10);
        sum = parseInt(sum / 10);
    }
    answer.push(carry);
})
console.log(answer.join("\n"));
