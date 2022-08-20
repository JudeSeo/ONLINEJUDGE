var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = [];
input = input.split(" ").map(v => BigInt(v));
console.log((input[0] * input[1]).toString());
