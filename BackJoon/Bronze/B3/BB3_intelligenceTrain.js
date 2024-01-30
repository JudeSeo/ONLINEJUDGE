// 2022-12-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [], sum = 0;
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    sum -= temp[0]
    sum += temp[1]
    answer.push(sum)
})
console.log(Math.max(...answer))