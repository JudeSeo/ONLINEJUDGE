// 2024-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [n, m] = input.splice(0, 1)[0].split(" ");
let answer = Array(Number(n) + 1).fill(0);
input.forEach(v => {
    let temp = v.split(" ");
    answer[temp[0]]++;
    answer[temp[1]]++;
})
answer = answer.slice(1);
console.log(answer.join("\n"));