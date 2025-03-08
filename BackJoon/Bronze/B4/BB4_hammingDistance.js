// 2025-03-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let s = input[0].split("");
let t = input[1].split("");
s.forEach((v, i) => {
    if (v != t[i]) answer++;
})
console.log(answer);