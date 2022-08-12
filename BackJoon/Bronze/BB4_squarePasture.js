// 2022-08-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let [x1, y1, x2, y2] = input[0].split(" ");
let [x3, y3, x4, y4] = input[1].split(" ");
let xMax = Math.max(x1, x2, x3, x4);
let yMax = Math.max(y1, y2, y3, y4);
let xSub = [xMax - x1, xMax - x2, xMax - x3, xMax - x4].sort((a, b) => b - a);
let ySub = [yMax - y1, yMax - y2, yMax - y3, yMax - y4].sort((a, b) => b - a);
answer = Math.max(xSub[0], ySub[0]);
console.log(answer ** 2);