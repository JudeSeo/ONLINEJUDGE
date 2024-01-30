// 2022-06-29
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let m = (input[1]-input[0])/400;
let answer = 1/(1+(10**m));
console.log(answer);
