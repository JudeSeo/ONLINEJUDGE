// 2023-10-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let alph = ['h', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(alph[input % 8] + (Math.ceil(input / 8)));