// 2022-07-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v));
    answer.push(parseInt(temp[1] / (temp[0] + 1)))
})
console.log(answer.join("\n"));
