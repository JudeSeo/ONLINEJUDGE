// 2024-01-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = 0;
let bonus = 0;
input.forEach((v, i) => {
    if (v == "O") answer += (bonus++ + i + 1);
    else bonus = 0;
})
console.log(answer);