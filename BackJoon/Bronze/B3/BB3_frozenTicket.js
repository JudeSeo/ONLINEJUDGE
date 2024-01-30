// 2023-02-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1;
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let temp = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    if (temp[0] < 12)
        answer.push(-1);
    else if (temp[1] < 4)
        answer.push(-1)
    else
        answer.push(temp[1] * 11 + 4);
}
console.log(answer.join("\n"));
