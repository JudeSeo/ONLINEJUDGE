// 2022-10-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1)
input.forEach(v => {
    answer.push(v.toLowerCase());
})
console.log(answer.join("\n"))