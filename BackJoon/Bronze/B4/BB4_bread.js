// 2022-07-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v));
    if (temp[1] - temp[0] >= 0)
        answer.push(temp[1]);
})
if (answer.length == 0)
    console.log(-1)
else
    console.log(Math.min(...answer))
