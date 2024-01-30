// 2022-12-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    answer.push(Math.pow(Math.pow(Math.pow(temp[0], temp[1]), temp[2]), temp[3]))
})
console.log(answer.join("\n"))