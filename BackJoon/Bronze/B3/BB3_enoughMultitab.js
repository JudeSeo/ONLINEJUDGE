// 2023-02-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let [people, mul] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
let sum = 0;
input[0].split(" ").map(v => sum += Math.ceil(v / 2));
console.log(sum >= people ? "YES" : "NO");
