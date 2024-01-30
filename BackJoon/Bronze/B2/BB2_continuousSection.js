// 2024-01-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split("");
    let prevNum = "";
    let cnt = 0;
    let max = 0;
    temp.forEach(val => {
        if (val == prevNum) cnt++;
        else cnt = 1;
        prevNum = val;
        max = Math.max(max, cnt);
    })
    answer.push(max);
})
console.log(answer.join("\n"));