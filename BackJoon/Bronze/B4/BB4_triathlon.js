// 2022-10-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let score = 1;
    if (temp[0] == temp[1] + temp[2])
        score = 2;
    answer.push(score * temp[0] * (temp[1] + temp[2]));
})
console.log(Math.max(...answer))
