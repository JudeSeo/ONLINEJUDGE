// 2022-11-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0") return;
    let temp = v.split(" ").map(val => BigInt(val));
    let string = `${(temp[0] / temp[1]).toString()} ${(temp[0] % temp[1]).toString()} \/ ${temp[1].toString()}`
    answer.push(string)
})
console.log(answer.join("\n"))