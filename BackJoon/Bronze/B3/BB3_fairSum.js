// 2023-01-04
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    let fair = [];
    for (let i = 1; i < v / 2; i++) {
        if (i != v - i)
            fair.push(`${i} ${v - i}`);
    }
    answer.push(`Pairs for ${v}: ${fair.join(", ")}`)
})
console.log(answer.join("\n"))