// 2022-06-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v));
    answer.push(temp[0] * 6 + temp[1] * 3 + temp[2] * 2 + temp[3] + temp[4] * 2);
})
console.log(answer.join(" "));
