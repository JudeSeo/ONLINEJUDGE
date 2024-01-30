// 2022-10-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
input = input.slice(1);
let hel = input[0].split(" ").map(v => BigInt(v)).reduce((a, b) => a < b ? b : a);
let vest = input[1].split(" ").map(v => BigInt(v)).reduce((a, b) => a < b ? b : a);
let answer = hel + vest;
console.log(answer.toString())