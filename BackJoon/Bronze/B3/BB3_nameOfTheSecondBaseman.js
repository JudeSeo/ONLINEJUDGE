// 2023-02-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = "뭐야?";
if(input.includes("anj")) answer = "뭐야;"
console.log(answer);
