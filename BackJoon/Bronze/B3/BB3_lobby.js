// 2023-04-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] / 2 <= temp[2]) answer.push(-1);
    else if (temp[0] / 2 <= temp[1]) answer.push(0);
    else {
        answer.push(Math.floor(temp[0] / 2) + 1 - temp[1])
    }
})
console.log(answer.join("\n"));
