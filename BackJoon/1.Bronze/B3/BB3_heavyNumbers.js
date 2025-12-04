// 2022-10-10
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let first = input[0].toString().split("").map(v => Number(v));
let second = input[1].toString().split("").map(v => Number(v));
let firstAns = 0;
let secAns = 0;
first.forEach(v=>{
    firstAns += v;
})
second.forEach(v=>{
    secAns += v;
})
firstAns *= first.length;
secAns *= second.length;
let answer = firstAns > secAns?1:(firstAns<secAns?2:0)
console.log(answer)