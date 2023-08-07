// 2023-08-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
const code = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5,
}
let answer = [];
input.forEach(v => {
    if (code[v] != undefined) answer.push(code[v]);
    else answer.push(v)
})
console.log(answer.join(""));