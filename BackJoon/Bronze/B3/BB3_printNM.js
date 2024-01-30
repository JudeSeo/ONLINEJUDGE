// 2023-02-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = [], index = 1;
for (let i = 0; i < input[0]; i++) {
    let temp = [];
    for (let j = 0; j < input[1]; j++) {
        temp.push(index++);
    }
    answer.push(temp.join(" "))
}
console.log(answer.join("\n"));