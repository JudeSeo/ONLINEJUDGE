// 2023-03-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
let num = input[1].split(" ").map(v => Number(v));
let comp = input[3].split(" ").map(v => Number(v));
num.forEach(v => {
    answer += v;
    if (comp.includes(answer))
        answer = 0;
})
console.log(answer);
