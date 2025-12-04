// 2022-09-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    answer.push(Math.floor(temp[1] / temp[0]))
})
console.log(Math.min(...answer));