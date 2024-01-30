// 2022-07-26
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(v => Number(v))
    answer.push(Math.floor((temp[0] * temp[1]) / 2));
})
console.log(answer.join("\n"));