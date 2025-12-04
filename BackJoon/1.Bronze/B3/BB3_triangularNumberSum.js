// 2024-08-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
let max = Math.max(...input);
let t = [0];
for (let i = 1; i <= max + 1; i++) {
    t[i] = t[i - 1] + i;
}
input.forEach(v => {
    let sum = 0;
    for (let i = 1; i <= v; i++) {
        sum += (i * t[i + 1]);
    }
    answer.push(sum);
})
console.log(answer.join("\n"));
