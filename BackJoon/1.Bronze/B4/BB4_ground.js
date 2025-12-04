// 2022-07-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = (input[0]*2)+(input[1]*2*3.141592)
console.log(answer);
