// 2023-11-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < input.length - 1; i++) {
    if (input[i] == input[i + 1]) answer++;
}
console.log(answer);