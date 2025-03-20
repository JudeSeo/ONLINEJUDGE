// 2025-03-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v[0]).sort();
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n').map(v => v[0]).sort();
let arr = ['k', 'l', 'p'];
let answer = JSON.stringify(input) == JSON.stringify(arr) ? "GLOBAL" : "PONIX";
console.log(answer);
