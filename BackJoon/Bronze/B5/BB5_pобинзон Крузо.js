// 2023-05-25
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = "V".repeat(Math.floor(input / 5)) + "I".repeat(input % 5);
console.log(answer);