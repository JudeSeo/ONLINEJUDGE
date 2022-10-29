// 2022-10-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v => Number(v))
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let answer = 0;
let score = 0;
input.forEach(v => {
    if (v == 0)
        score = 0;
    else
        score++;
    answer += score
})
console.log(answer)
