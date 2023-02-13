// 2023-02-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    if (Math.log2(v) == parseInt(Math.log2(v))) answer.push(1);
    else answer.push(0)
})
console.log(answer.join("\n"));
