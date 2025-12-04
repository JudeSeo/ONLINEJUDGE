// 2023-07-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = []
for (let i = 1; i <= Number(input); i++) {
    if (i % 7 == 0 && i % 11 == 0) answer.push("Wiwat!");
    else if (i % 7 == 0) answer.push("Hurra!")
    else if (i % 11 == 0) answer.push("Super!");
    else answer.push(i)
}
console.log(answer.join("\n"));
