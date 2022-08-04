// 2022-08-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    if (v.indexOf("D") >= 0)
        answer.push(v.indexOf("D"))
    else
        answer.push(v.length)
})
console.log(answer.join("\n"));