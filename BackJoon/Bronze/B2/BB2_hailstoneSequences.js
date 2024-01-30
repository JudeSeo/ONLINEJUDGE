// 2024-01-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];

input.forEach(v => {
    let num = v;
    while (v != 1) {
        if (v < (num / 10)) break;
        if (v % 2 == 0) v /= 2;
        else v = v * 3 + 1;
        num = Math.max(num, v);
    }
    answer.push(num);
})
console.log(answer.join("\n"));