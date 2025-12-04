// 2023-12-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("").map(val => Number(val));
    let set = new Set(temp);
    answer.push(set.size);
})
console.log(answer.join("\n"));