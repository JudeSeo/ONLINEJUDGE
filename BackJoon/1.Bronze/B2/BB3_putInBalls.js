// 2025-03-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [n, m] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let answer = new Array(n).fill(0);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    for (let i = temp[0] - 1; i < temp[1]; i++) {
        answer[i] = temp[2];
    }
})
console.log(answer.join(" "));