// 2023-08-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
for (let i = 1; i <= input; i++) {
    if (i % 3 == 0 && i % 5 == 0) answer.push("DeadMan\n");
    else if (i % 3 == 0) answer.push("Dead\n");
    else if (i % 5 == 0) answer.push("Man\n");
    else answer.push(i+" ");
}
console.log(answer.join(""));