// 2022-06-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => BigInt(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => BigInt(v));
console.log((input[0] + input[1]).toString());
console.log((input[0] - input[1]).toString());
console.log((input[0] * input[1]).toString());