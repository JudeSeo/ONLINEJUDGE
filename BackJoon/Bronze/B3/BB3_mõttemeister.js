// 2023-09-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = input[0].split("");
input = input.slice(2);
let answer = [];
input.forEach(v => {
    let temp = v.split("");
    let strike = 0;
    let ball = 0;
    temp.forEach((val, index) => {
        if (num.includes(val)) ball++;
        if (num[index] == val) strike++;
    })
    answer.push(`${ball} ${strike}`);
})
console.log(answer.join("\n"));