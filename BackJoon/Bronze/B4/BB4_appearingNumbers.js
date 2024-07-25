// 2024-07-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ").map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split(" ").map(v => Number(v));
let set = new Set(input);
let answer = Array.from(set).sort((a, b) => a - b);
console.log(answer.join("\n"));