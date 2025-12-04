// 2024-12-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let ampere = input.splice(0, 1)[0];
let [watt, volt] = input[0].split(" ").map(v => Number(v));
let answer = (watt / volt) >= ampere ? 1 : 0;
console.log(answer);