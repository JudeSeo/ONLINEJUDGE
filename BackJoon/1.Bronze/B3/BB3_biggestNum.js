// 2022-12-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let max = 0, line = 0;
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val));
    if (Math.max(...temp) > max) {
        max = Math.max(...temp);
        line = i;
    }
})
answer.push(line + 1, input[line].split(" ").map(v => Number(v)).indexOf(max) + 1);
console.log(max)
console.log(answer.join(" "))