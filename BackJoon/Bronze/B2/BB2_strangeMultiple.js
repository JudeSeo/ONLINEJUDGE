// 2023-11-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let answer = 0;
let first = input[0].split("").map(v => Number(v));
let second = input[1].split("").map(v => Number(v));
first.forEach(v => {
    second.forEach(val => {
        answer += (v * val);
    })
})
console.log(answer);