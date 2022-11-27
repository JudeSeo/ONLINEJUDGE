// 2022-11-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    answer.push(v.split("").length)
})
console.log(answer.join("\n"))