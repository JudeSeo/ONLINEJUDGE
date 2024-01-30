// 2023-07-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let b = input.filter(v => v == "B").length;
let c = input.filter(v => v == "C").length;
let answer = Math.floor(b / 2) + Math.floor(c / 2);
console.log(answer)