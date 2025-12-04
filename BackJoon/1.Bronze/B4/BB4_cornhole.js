// 2023-08-13
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
const a = input[0].split(" ").map(v => Number(v));
const b = input[1].split(" ").map(v => Number(v));
const aScore = a[0] * 3 + a[1];
const bScore = b[0] * 3 + b[1];
let answer = '';
if (aScore > bScore) answer = "1 " + (aScore - bScore);
else if (aScore < bScore) answer = "2 " + (bScore - aScore);
else answer = "NO SCORE";
console.log(answer)