// 2022-07-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let tea = input[0];
input=input.slice(1)[0].split(" ");
let answer = input.filter(v=>v==tea).length
console.log(answer);
