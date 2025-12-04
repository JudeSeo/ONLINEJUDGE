// 2022-10-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
while (input.length > 0) {
    input = input.slice(1);
    let sum = 0;
    input[0].split(" ").map(v => Number(v)).forEach(v => {
        sum += v;
    })
    answer.push(sum);
    input = input.slice(1);
}
console.log(answer.join("\n"))