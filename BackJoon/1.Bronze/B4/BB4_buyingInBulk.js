// 2023-07-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    answer.push(v);
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] == 1) answer.push(temp[0] * temp[1]);
    else answer.push(temp[0]*temp[1]-((temp[0] - 1) * 2))
})
console.log(answer.join("\n"));