// 2023-06-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [att, price] = input;
if (att < 5) answer.push(price);
if (att >= 5) answer.push(price - 500);
if (att >= 10) answer.push(price - (price / 10));
if (att >= 15) answer.push(price - 2000);
if (att >= 20) answer.push(price - (price / 4));
console.log(Math.max(Math.min(...answer), 0));