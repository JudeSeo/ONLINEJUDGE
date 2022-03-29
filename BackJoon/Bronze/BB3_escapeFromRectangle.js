// 2022-03-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let myLocation = input.slice(0, 2);
let square = input.slice(2);
let x = myLocation[0];
let y = myLocation[1];
let w = square[0];
let h = square[1];
let answer = [x, y, w - x, h - y];
answer.sort((a, b) => (a - b));
console.log(answer[0]);