// 2024-05-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input.length > 1) {
    let num = input.splice(0, 1)[0];
    let temp1 = input.splice(0, num);
    let first = [...temp1].map(v => v.toLowerCase()).sort()[0];
    answer.push(temp1.find(v=>v.toLowerCase() == first));
}
console.log(answer.join("\n"));