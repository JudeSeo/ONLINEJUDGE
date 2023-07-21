// 2023-07-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = []
let time = 0;
input.forEach((v, i) => {
    if (i != input.length - 1) time += 8
    time += v
})
answer.push(Math.floor(time / 24));
answer.push(time % 24);
console.log(answer.join(" "));
