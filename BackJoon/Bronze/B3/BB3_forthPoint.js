// 2022-12-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [x1, y1] = input[0].split(" ");
let [x2, y2] = input[1].split(" ");
let [x3, y3] = input[2].split(" ");
let answer = [];
if (x1 == x2) answer[0] = x3;
else if (x1 == x3) answer[0] = x2;
else if (x2 == x3) answer[0] = x1;
if (y1 == y2) answer[1] = y3;
else if (y1 == y3) answer[1] = y2;
else if (y2 == y3) answer[1] = y1;
console.log(answer.join(" "))