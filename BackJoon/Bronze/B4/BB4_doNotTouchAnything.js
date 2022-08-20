// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let cctv = input[2];
let answer = Math.ceil(input[0]/cctv) * Math.ceil(input[1]/cctv);
console.log(answer);
