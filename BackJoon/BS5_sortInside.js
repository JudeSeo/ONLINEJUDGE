// 2022-02-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("");
input.sort((a, b)=>(b-a));

console.log(input.join(""));