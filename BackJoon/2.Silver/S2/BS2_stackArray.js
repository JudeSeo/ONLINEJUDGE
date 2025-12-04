// 2024-04-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
let stack = [];
let cnt = 1;
let flag = false;
input.forEach(v => {
    while (cnt <= v) {
        stack.push(cnt++);
        answer.push("+");
    }
    let popedItem = stack.pop();
    if (popedItem != v)
        flag = true;
    answer.push("-");
})
if (flag) console.log("NO");
else console.log(answer.join("\n"));