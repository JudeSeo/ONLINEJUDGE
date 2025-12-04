// 2022-10-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1)
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let oneLeg = temp[1] * 2 - temp[0];
    answer.push(`${oneLeg} ${temp[1] - oneLeg}`)
})
console.log(answer.join("\n"))