// 2024-03-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = 0;
let two = input.filter(v => v == "2").length;
let zero = input.filter(v => v == "0").length;
let one = input.filter(v => v == "1").length;
let eight = input.filter(v => v == "8").length;
if (two + zero + one + eight == input.length) answer = 1;
if (two + zero + one + eight == input.length && two > 0 && zero > 0 && one > 0 && eight > 0) answer = 2;
if (two + zero + one + eight == input.length && two > 0 && zero > 0 && one > 0 && eight > 0 && two == zero && zero == one && one == eight && eight == two) answer = 8;
console.log(answer);