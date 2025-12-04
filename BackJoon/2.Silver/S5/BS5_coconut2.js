// 2024-06-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
input.forEach(v => {
    if (v == -1) return;
    let people = 0;
    for (let i = 0; i < Math.sqrt(v) + 1; i++) {
        let tmp = v;
        let flag = true;
        for (let j = 0; j < i; j++) {
            tmp -= 1;
            if (tmp % 1 == 0) tmp = (tmp * (i - 1)) / i;
            else {
                flag = false;
                break;
            }
        }
        if (flag && tmp % i == 0) people = i;
    }
    if (people < 2)
        answer.push(`${v} coconuts, no solution`)
    else
        answer.push(`${v} coconuts, ${people} people and 1 monkey`)
})
console.log(answer.join("\n"));
