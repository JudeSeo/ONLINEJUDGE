// 2025-03-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let num = Number(input.splice(0, 1)[0]);
let x = input.map(v => v.split(" ")[0]).map(v => Number(v));
let y = input.map(v => v.split(" ")[1]).map(v => Number(v));
let answer = 0;
if (num != 1) {
    let xMax = Math.max(...x);
    let xMin = Math.min(...x);
    let yMax = Math.max(...y);
    let yMin = Math.min(...y);
    answer = Math.abs(xMax - xMin) * Math.abs(yMax - yMin);
}
console.log(answer);