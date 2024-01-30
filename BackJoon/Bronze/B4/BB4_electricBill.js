// 2023-06-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [a, b] = input.splice(0, 2)[0].split(" ").map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v >= 1000)
        answer.push(`${v} ${1000 * a + (v - 1000) * b}`);
    else
        answer.push(`${v} ${v * a}`);
})
console.log(answer.join("\n"));