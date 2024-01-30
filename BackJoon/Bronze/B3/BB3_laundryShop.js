// 2022-12-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    let change = [];
    change.push(Math.floor(v / 25))
    v = v % 25;
    change.push(Math.floor(v / 10))
    v = v % 10;
    change.push(Math.floor(v / 5))
    v = v % 5;
    change.push(Math.floor(v))
    answer.push(change.join(" "));
})
console.log(answer.join("\n"))