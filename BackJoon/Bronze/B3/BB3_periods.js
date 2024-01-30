// 2023-04-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split("").reverse();
    if (temp[0] != ".") answer.push(v + ".")
    else answer.push(v);
})
console.log(answer.join("\n"));