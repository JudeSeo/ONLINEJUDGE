// 2022-09-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let vote = {Lion: 0, Tiger: 0}
let answer = ""
input.forEach(v => {
    vote[v]++;
})
answer = vote.Lion >= 5 ? "Lion" : "Tiger";
console.log(answer)