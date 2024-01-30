// 2022-12-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v)).sort((a, b) => a - b);
let x1 = Math.floor((input[0] - 1) / 4);
let x2 = Math.floor((input[1] - 1) / 4);
let y1 = (input[0] + 3) % 4;
let y2 = (input[1] + 3) % 4;
let answer = Math.abs(x2 - x1) + Math.abs(y2 - y1)
console.log(answer)