// 2022-06-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(v => Number(v));
    answer.push(temp[0] + temp[1] + temp[2] + temp[3])
})
console.log(Math.max(...answer));
