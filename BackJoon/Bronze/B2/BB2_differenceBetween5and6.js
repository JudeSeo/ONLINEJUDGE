// 2023-12-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ");
let minA = Number(input[0].replaceAll("6", "5"));
let minB = Number(input[1].replaceAll("6", "5"));
let maxA = Number(input[0].replaceAll("5", "6"));
let maxB = Number(input[1].replaceAll("5", "6"));
console.log(`${minA +minB} ${maxA + maxB}`);