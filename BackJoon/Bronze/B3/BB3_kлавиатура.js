// 2022-09-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
let arr = input[0].split(" ").map(v => Number(v));
input = input.slice(2)[0].split(" ").map(v => Number(v));
input.forEach(v => {
    arr[v - 1]--;
})
arr.forEach(v => {
    if (v < 0)
        answer.push("yes");
    else
        answer.push("no")
})
console.log(answer.join("\n"));