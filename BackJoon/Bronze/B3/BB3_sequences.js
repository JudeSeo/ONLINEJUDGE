// 2023-08-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0") return;
    let temp = v.split(" ").map(val => Number(val));
    let ans = temp[2] - temp[0] + temp[1]
    if (ans % temp[1] || (temp[1] && temp[0] > temp[2]))
        return answer.push("X");
    else
        return answer.push(Math.floor(ans / temp[1]))
})
console.log(answer.join("\n"))