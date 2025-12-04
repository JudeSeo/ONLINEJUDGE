// 2022-10-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = (input / 2) ** 2 * Math.sqrt(3);
console.log(answer)
