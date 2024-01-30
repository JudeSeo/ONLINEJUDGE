// 2022-12-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let [num, mi] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let answer = 0;
for (let i = 0; i < num - 1; i++) {
    if (input[i] - input[i + 1] >= mi)
        answer++
}
console.log(answer)
