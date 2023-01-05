// 2023-01-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v=>{
    if(v=="***") return;
    answer.push(v.split("").reverse().join(""));
})
console.log(answer.join("\n"));
