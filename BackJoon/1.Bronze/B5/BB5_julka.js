// 2022-06-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(BigInt);
let answer = [];
let temp = (input[0] + input[1]) / 2n;
answer.push(temp.toString());
answer.push((temp - input[1]).toString());
console.log(answer.join("\n"));
