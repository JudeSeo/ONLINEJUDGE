// 2023-04-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
let change = 100 - input;
answer.push(parseInt(change / 25))
change = change % 25;
answer.push(parseInt(change / 10))
change = change % 10;
answer.push(parseInt(change / 5))
change = change % 5;
answer.push(change)
console.log(answer.join(" "))