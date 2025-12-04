// 2023-02-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let temp = input.splice(0, 2)[1].split(" ").map(v => Number(v));
    answer.push(Math.min(...temp) + " " + Math.max(...temp))
}
console.log(answer.join("\n"));
