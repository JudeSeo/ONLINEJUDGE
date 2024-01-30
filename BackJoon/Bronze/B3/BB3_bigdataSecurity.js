// 2023-02-27
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[1].split("");
let sec = input.filter(v => v == "s").length, big = input.filter(v => v == "b").length;
console.log(big > sec ? "bigdata?" : big < sec ? "security!" : "bigdata? security!");
