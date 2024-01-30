// 2023-02-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
console.log((input ** 2 * Math.PI).toFixed(6))
console.log((input ** 2 * 2).toFixed(6))