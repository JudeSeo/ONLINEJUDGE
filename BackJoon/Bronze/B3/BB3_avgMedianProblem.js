// 2023-08-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    answer.push(temp[0] - (temp[1] - temp[0]));
})
console.log(answer.join("\n"));
